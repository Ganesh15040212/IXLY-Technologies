import { useState } from 'react'
import Layout from '../components/Layout'

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const errs = []
    if (!formData.name.trim()) errs.push('Name is required.')
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.push('Valid email is required.')
    if (!formData.phone.trim() || !/^[0-9]{10,15}$/.test(formData.phone)) errs.push('Valid phone number is required.')
    if (!formData.message.trim()) errs.push('Message is required.')
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (errs.length > 0) { setErrors(errs); return }
    setErrors([])
    setLoading(true)

    const apiBase = import.meta.env.VITE_API_BASE_URL || ''

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setErrors(data.errors || ['Failed to send message. Please try again.'])
        setStatus('error')
      }
    } catch {
      setErrors(['Failed to send message. Please check your network and try again.'])
      setStatus('error')
    }
    setLoading(false)
  }

  return (
    <Layout title="Contact Us - IXLY Technologies">
      <div className="bodybg bodybg1">
        <section className="container text-center banner_head">
          <h2>&quot;Let&apos;s <b>Talk!&quot;</b></h2>
          <p>Have questions or ideas? Let&apos;s create something amazing together.</p>
        </section>
        <section>
          <div className="contact_form container">
            <h3 className="highlighttext">Say Hello</h3>
            {errors.length > 0 && (
              <div style={{ color: 'red', marginBottom: '10px' }}>
                <ul>{errors.map((err, i) => <li key={i}>{err}</li>)}</ul>
              </div>
            )}
            {status === 'success' && (
              <div style={{ color: 'green', marginBottom: '20px' }}>Your message has been sent successfully!</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" placeholder="Your name" name="name" id="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="col">
                  <label htmlFor="email">Email *</label>
                  <input type="text" className="form-control" placeholder="Your email address" name="email" id="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="phone">Phone *</label>
                  <input type="text" className="form-control" placeholder="Your phone number" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="col">
                  <label htmlFor="company">Company / Organization</label>
                  <input type="text" className="form-control" placeholder="Ex. IXLY" name="company" id="company" value={formData.company} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="message">Message *</label>
                  <textarea className="form-control" placeholder="Your message" name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col text-end">
                  <button type="submit" className="submit_btn btn" id="submit_btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="container contact_details">
          <div className="row col-md-12 dlists">
            <div className="col-md-3"><h3>Location</h3></div>
            <div className="col-md-8 address">
              #9/9b, 2nd Floor, Usha Singh Building (Near SBI Bank), <br />
              V G Hospital Bus Stop, Thudiyalur, Coimbatore – 641034, <br />
              Tamilnadu, India.
            </div>
            <div className="col-md-1 text-end"><i className="fa-solid fa-right-from-bracket"></i></div>
          </div>
          <div className="row col-md-12 dlists">
            <div className="col-md-3"><h3>Business Address</h3></div>
            <div className="col-md-8 address">
              #B3 Forge, KCT Tech Park, Thudiyalur Rd, <br />
              Saravanampatti, Coimbatore – 641049, <br />
              Tamilnadu, India.
            </div>
            <div className="col-md-1 text-end"><i className="fa-solid fa-right-from-bracket"></i></div>
          </div>
          <div className="row col-md-12 dlists">
            <div className="col-md-3"><h3>Email</h3></div>
            <div className="col-md-8 address">cst@ixly.in</div>
            <div className="col-md-1 text-end"><i className="fa-regular fa-envelope"></i></div>
          </div>
          <div className="row col-md-12 dlists">
            <div className="col-md-3"><h3>Phone</h3></div>
            <div className="col-md-8 address">+91-8148001444</div>
            <div className="col-md-1 text-end"><i className="fa-solid fa-mobile-screen"></i></div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
