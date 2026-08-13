import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Home from './pages/Home'

const AboutUs = lazy(() => import('./pages/AboutUs'))
const Services = lazy(() => import('./pages/Services'))
const DomainExpertise = lazy(() => import('./pages/DomainExpertise'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Awnopy = lazy(() => import('./pages/Awnopy'))
const IshaWoocommerce = lazy(() => import('./pages/IshaWoocommerce'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const ItStaffAugmentation = lazy(() => import('./pages/ItStaffAugmentation'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
    // Keep scroll-triggered animations in sync with the new route's DOM
    window.ScrollTrigger?.refresh()
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/domain-expertise" element={<DomainExpertise />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/awnopy" element={<Awnopy />} />
          <Route path="/isha-woocommerce" element={<IshaWoocommerce />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/it-staff-augmentation-services" element={<ItStaffAugmentation />} />
        </Routes>
      </Suspense>
    </>
  )
}
