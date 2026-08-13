import Header from './Header'
import Footer from './Footer'
import BottomTabBar from './BottomTabBar'
import { useEffect } from 'react'

export default function Layout({ children, title, useMainStyles = true }) {
  useEffect(() => {
    if (title) document.title = title
    // Load styles.css for all main pages
    if (useMainStyles) {
      const link = document.getElementById('main-styles')
      if (!link) {
        const el = document.createElement('link')
        el.id = 'main-styles'
        el.rel = 'stylesheet'
        el.href = '/assets/css/styles.css'
        document.head.appendChild(el)
      }
      // Remove landing style if present
      const landingLink = document.getElementById('landing-styles')
      if (landingLink) landingLink.remove()

      // Toggle body class for inner pages
      if (window.location.pathname === '/') {
        document.body.classList.remove('innerpages')
      } else {
        document.body.classList.add('innerpages')
      }
    } else {
      document.body.classList.remove('innerpages')
    }
  }, [title, useMainStyles])

  return (
    <>
      <Header />
      {children}
      <Footer />
      <BottomTabBar />
    </>
  )
}
