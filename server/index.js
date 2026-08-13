import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { sendContactEmails } from './mailer.js'

const app = express()
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

function validate({ name, email, phone, message }) {
  const errors = []
  if (!name || !name.trim()) errors.push('Name is required.')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.')
  if (!phone || !/^[0-9]{10,15}$/.test(phone)) errors.push('Valid phone number is required.')
  if (!message || !message.trim()) errors.push('Message is required.')
  return errors
}

app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', phone = '', company = '', message = '' } = req.body || {}
  const errors = validate({ name, email, phone, message })
  if (errors.length) {
    return res.status(400).json({ errors })
  }

  try {
    await sendContactEmails({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      message: message.trim(),
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    res.status(500).json({ errors: ['Failed to send email. Please try again later.'] })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Contact API listening on port ${port}`))
