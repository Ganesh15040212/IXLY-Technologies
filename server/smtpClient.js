import { connect as netConnect } from 'net'
import { connect as tlsConnect } from 'tls'
import os from 'os'

const CRLF = '\r\n'

class SmtpConnection {
  constructor(socket) {
    this.socket = socket
    this.buffer = ''
    this.pending = null
    socket.on('data', (chunk) => {
      this.buffer += chunk.toString('utf8')
      this._flush()
    })
    socket.on('error', (err) => this._fail(err))
    socket.on('close', () => this._fail(new Error('SMTP connection closed unexpectedly')))
  }

  _fail(err) {
    if (this.pending) {
      const { reject } = this.pending
      this.pending = null
      reject(err)
    }
  }

  _flush() {
    if (!this.pending) return
    const lines = this.buffer.split(CRLF)
    let consumedLines = 0
    let complete = false
    // Only inspect lines guaranteed to be fully received (i.e. not the trailing,
    // possibly-partial fragment left after the last CRLF).
    for (let i = 0; i < lines.length - 1; i++) {
      const line = lines[i]
      if (/^\d{3} /.test(line)) {
        consumedLines = i + 1
        complete = true
        break
      }
    }
    if (!complete) return
    const consumedText = lines.slice(0, consumedLines).join(CRLF) + CRLF
    this.buffer = this.buffer.slice(consumedText.length)
    const code = parseInt(lines[0].slice(0, 3), 10)
    const message = lines.slice(0, consumedLines).map((l) => l.slice(4)).join('\n')
    const { resolve } = this.pending
    this.pending = null
    resolve({ code, message })
  }

  readResponse(timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending = null
        reject(new Error('SMTP response timed out'))
      }, timeoutMs)
      this.pending = {
        resolve: (val) => { clearTimeout(timer); resolve(val) },
        reject: (err) => { clearTimeout(timer); reject(err) },
      }
      this._flush()
    })
  }

  async command(cmd, expectedCodes) {
    this.socket.write(cmd + CRLF)
    const res = await this.readResponse()
    if (expectedCodes && !expectedCodes.includes(res.code)) {
      throw new Error(`SMTP command "${cmd.split(' ')[0]}" failed: ${res.code} ${res.message}`)
    }
    return res
  }
}

function extractAddress(fromOrTo) {
  const match = /<([^>]+)>/.exec(fromOrTo)
  return match ? match[1] : fromOrTo.trim()
}

// Escape any line starting with "." per RFC 5321 so it isn't mistaken for the
// end-of-DATA marker, and normalize line endings to CRLF.
function dotStuff(body) {
  return body
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => (line.startsWith('.') ? '.' + line : line))
    .join(CRLF)
}

async function openConnection({ host, port, secure }) {
  if (secure) {
    const socket = tlsConnect({ host, port, servername: host })
    await new Promise((resolve, reject) => {
      socket.once('secureConnect', resolve)
      socket.once('error', reject)
    })
    return socket
  }
  const socket = netConnect({ host, port })
  await new Promise((resolve, reject) => {
    socket.once('connect', resolve)
    socket.once('error', reject)
  })
  return socket
}

async function upgradeToTls(plainSocket, host) {
  const secureSocket = tlsConnect({ socket: plainSocket, host, servername: host })
  await new Promise((resolve, reject) => {
    secureSocket.once('secureConnect', resolve)
    secureSocket.once('error', reject)
  })
  return secureSocket
}

export async function sendMail({ host, port, secure, user, pass, from, to, subject, html, replyTo }) {
  const clientName = os.hostname() || 'localhost'
  let socket = await openConnection({ host, port, secure })
  let conn = new SmtpConnection(socket)

  // Server greeting
  await conn.readResponse()
  await conn.command(`EHLO ${clientName}`, [250])

  if (!secure) {
    await conn.command('STARTTLS', [220])
    socket = await upgradeToTls(socket, host)
    conn = new SmtpConnection(socket)
    await conn.command(`EHLO ${clientName}`, [250])
  }

  await conn.command('AUTH LOGIN', [334])
  await conn.command(Buffer.from(user, 'utf8').toString('base64'), [334])
  await conn.command(Buffer.from(pass, 'utf8').toString('base64'), [235])

  const fromAddr = extractAddress(from)
  const toAddr = extractAddress(to)

  await conn.command(`MAIL FROM:<${fromAddr}>`, [250])
  await conn.command(`RCPT TO:<${toAddr}>`, [250, 251])
  await conn.command('DATA', [354])

  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    replyTo ? `Reply-To: ${replyTo}` : null,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
  ].filter(Boolean).join(CRLF)

  const message = headers + CRLF + CRLF + dotStuff(html)
  socket.write(message + CRLF + '.' + CRLF)
  await conn.readResponse()

  await conn.command('QUIT', [221]).catch(() => {})
  socket.end()
}
