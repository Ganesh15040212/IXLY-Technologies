import { sendMail } from './smtpClient.js'

function smtpConfig() {
  return {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE !== 'false',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function emailShell(title, bodyHtml) {
  return `
<html>
<head>
<style>
    body { font-family: Arial, sans-serif; background: linear-gradient(to right, #006175, #47A7C7, #6ce704, #00a950); color: #fff; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #fff; color: #333; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
    th { background: #47A7C7; color: #fff; }
    .thank-you { text-align: center; font-size: 18px; margin-top: 20px; color: #006175; }
</style>
</head>
<body>
    <div class="container">
        <h2 style="text-align: center; color: #006175;">${title}</h2>
        ${bodyHtml}
    </div>
</body>
</html>`
}

function detailsTable({ name, email, phone, company, message }) {
  return `
    <table>
      <tr><th>Name</th><td>${escapeHtml(name)}</td></tr>
      <tr><th>Email</th><td>${escapeHtml(email)}</td></tr>
      <tr><th>Phone</th><td>${escapeHtml(phone)}</td></tr>
      <tr><th>Company</th><td>${escapeHtml(company)}</td></tr>
      <tr><th>Message</th><td>${escapeHtml(message)}</td></tr>
    </table>`
}

export async function sendContactEmails({ name, email, phone, company, message }) {
  const toEmail = process.env.TO_EMAIL || 'cst@ixly.in'
  const table = detailsTable({ name, email, phone, company, message })

  const adminHtml = emailShell('New Contact Form Submission', table)
  const userHtml = emailShell('Thank You for Contacting Us!', `
    <p>Dear ${escapeHtml(name)},</p>
    <p>We have received your message and will get back to you shortly. Here are the details you submitted:</p>
    ${table}
    <p class="thank-you">We appreciate your time! Our team will respond to you soon.</p>
    <p>Best regards,<br><strong>Ixly Technologies Team</strong></p>
  `)

  const from = process.env.MAIL_FROM
  const config = smtpConfig()

  await sendMail({ ...config, from, to: toEmail, replyTo: email, subject: 'New Contact Form Submission', html: adminHtml })
  await sendMail({ ...config, from, to: email, subject: 'Thank You for Contacting Us!', html: userHtml })
}
