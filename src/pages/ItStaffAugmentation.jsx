import { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function ItStaffAugmentation() {
  useEffect(() => {
    // Load the Google Fonts (Inter + Poppins) this page's stylesheet expects —
    // the original page loaded these in its own <head>; this SPA shares one
    // index.html, so they're not there by default.
    const existingFonts = document.getElementById('landing-fonts')
    if (!existingFonts) {
      const preconnect1 = document.createElement('link')
      preconnect1.id = 'landing-fonts'
      preconnect1.rel = 'preconnect'
      preconnect1.href = 'https://fonts.googleapis.com'
      document.head.appendChild(preconnect1)

      const preconnect2 = document.createElement('link')
      preconnect2.id = 'landing-fonts-preconnect2'
      preconnect2.rel = 'preconnect'
      preconnect2.href = 'https://fonts.gstatic.com'
      preconnect2.crossOrigin = 'anonymous'
      document.head.appendChild(preconnect2)

      const fontStylesheet = document.createElement('link')
      fontStylesheet.id = 'landing-fonts-stylesheet'
      fontStylesheet.rel = 'stylesheet'
      fontStylesheet.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      document.head.appendChild(fontStylesheet)
    }

    // Load the landing page specific CSS
    const existing = document.getElementById('landing-styles')
    if (!existing) {
      const link = document.createElement('link')
      link.id = 'landing-styles'
      link.rel = 'stylesheet'
      link.href = '/css/style.css'
      document.head.appendChild(link)
    }
    // Remove main site styles temporarily to avoid conflicts
    const mainStyles = document.getElementById('main-styles')
    if (mainStyles) mainStyles.disabled = true

    let mm
    let lenis
    let lenisRafId
    let cursorRafId
    let cancelled = false

    // Run GSAP + Slick after libraries loaded
    const initAnimations = () => {
      if (!window.gsap || !window.ScrollTrigger) return
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const cards = [
        document.querySelector('#resume1'),
        document.querySelector('#resume2'),
        document.querySelector('#resume3')
      ].filter(Boolean)

      if (cards.length < 3) return

      let shuffleTween

      gsap.set(cards[0], { x: -window.innerWidth, y: -window.innerHeight, rotation: 0, rotationY: -10, rotationX: -55, skewX: 20, opacity: 0 })
      gsap.set(cards[1], { x: 0, y: window.innerHeight, rotation: 0, rotationY: -20, rotationX: -55, skewX: 20, opacity: 0 })
      gsap.set(cards[2], { x: window.innerWidth, y: -window.innerHeight, rotation: 0, rotationY: -16, rotationX: -55, skewX: 20, opacity: 0 })

      function positionCards() {
        gsap.to(cards[0], { x: -18, y: 12, rotation: 0, rotationY: -10, rotationX: -55, skewX: 20, zIndex: 1, duration: 1, opacity: 0.8 })
        gsap.to(cards[1], { x: 18, y: -18, rotation: 0, rotationY: -30, rotationX: -45, skewX: 20, zIndex: 2, duration: 1, opacity: 0.8 })
        gsap.to(cards[2], { x: 40, y: -100, rotation: 0, rotationY: -16, rotationX: -55, skewX: 20, zIndex: 3, duration: 1, opacity: 0.8 })
      }

      function startShuffle() { shuffleTween = gsap.delayedCall(2, shuffle) }

      function shuffle() {
        const top = cards.pop()
        gsap.timeline({ defaults: { ease: 'power2.inOut' }, onComplete: () => { cards.unshift(top); positionCards(); shuffleTween = gsap.delayedCall(2, shuffle) } })
          .to(top, { duration: 1.6, x: 90, y: -80, rotation: 12, opacity: 1 })
          .to(top, { duration: 1.2, x: -18, y: 12, rotation: -8, zIndex: 0, opacity: 1 })
      }

      gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' }, onComplete: () => { positionCards(); startShuffle() } })
        .to(cards[0], { x: -18, y: 12, rotation: 0, rotationY: -10, rotationX: -55, skewX: 20, opacity: 0.8 }, 0)
        .to(cards[1], { x: 18, y: -18, rotation: 0, rotationY: -20, rotationX: -55, skewX: 20, opacity: 0.8 }, 0.2)
        .to(cards[2], { x: 40, y: -100, rotation: 0, rotationY: -16, rotationX: -55, skewX: 20, opacity: 0.8 }, 0.4)

      ScrollTrigger.create({
        trigger: '.resumes-img-container', start: 'top center', end: 'bottom top', scrub: 1,
        onEnter() { if (shuffleTween) shuffleTween.kill() },
        onUpdate(self) {
          const p = self.progress
          gsap.to(cards[0], { x: gsap.utils.interpolate(-18, -window.innerWidth, p), y: gsap.utils.interpolate(12, -window.innerHeight, p), rotation: gsap.utils.interpolate(-8, -25, p), duration: .3, opacity: 0.1 })
          gsap.to(cards[1], { x: 0, y: gsap.utils.interpolate(0, window.innerHeight, p), rotation: gsap.utils.interpolate(0, 15, p), duration: .3, opacity: 0.1 })
          gsap.to(cards[2], { x: gsap.utils.interpolate(18, window.innerWidth, p), y: gsap.utils.interpolate(-12, -window.innerHeight, p), rotation: gsap.utils.interpolate(8, 25, p), duration: .3, opacity: 0.1 })
        }
      })

      // GSAP issues animation
      mm = gsap.matchMedia()
      mm.add('(min-width: 992px)', () => {
        gsap.set('.isssues-txt', { x: 0, y: 0, opacity: 0 })
        const tl1 = gsap.timeline({ scrollTrigger: { trigger: '.issues-bg', start: 'top center', end: 'bottom bottom', scrub: 1 } })
        tl1.from('#issues-img', { y: 400, opacity: 0, duration: 1 })
        const issuePositions = [
          { id: '#issue1', x: -400, y: -232 }, { id: '#issue2', x: -530, y: -170 },
          { id: '#issue3', x: -400, y: -80 }, { id: '#issue4', x: -450, y: -1 },
          { id: '#issue5', x: 197, y: -230 }, { id: '#issue6', x: 260, y: -150 },
          { id: '#issue7', x: 210, y: -80 }, { id: '#issue8', x: 270, y: 0 },
        ]
        issuePositions.forEach(({ id, x, y }) => {
          tl1.to(id, { x, y, opacity: 1, duration: 1 }, 0)
          gsap.to(id, { yPercent: -10, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        })
      })

      // Lenis smooth scroll
      if (window.Lenis && !cancelled) {
        lenis = new window.Lenis({ duration: 1.2, smoothWheel: true })
        lenis.on('scroll', ScrollTrigger.update)
        const raf = (time) => { lenis.raf(time); lenisRafId = requestAnimationFrame(raf) }
        lenisRafId = requestAnimationFrame(raf)
      }

      ScrollTrigger.refresh()
    }

    // Small delay to allow CDN scripts to be ready
    const timer = setTimeout(initAnimations, 500)

    // Slick slider
    const initSlick = () => {
      if (window.$ && window.$.fn && window.$.fn.slick) {
        window.$('.my-slider').slick({
          slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: true, autoplay: true, autoplaySpeed: 1500,
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false, dots: true } },
            { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true } }
          ]
        })
        window.$('.slider').slick({ slidesToShow: 1, slidesToScroll: 1, dots: false, centerMode: true, arrows: false, autoplay: true })
      }
    }
    const slickTimer = setTimeout(initSlick, 600)

    // Cursor
    const initCursor = () => {
      if (!window.$ || cancelled) return
      let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0
      window.$(document).on('mousemove.itstaffcursor', (e) => {
        mouseX = e.clientX; mouseY = e.clientY
        window.$('.cursor2').css({ left: mouseX, top: mouseY })
      })
      function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15
        window.$('.cursor').css({ left: cursorX, top: cursorY })
        cursorRafId = requestAnimationFrame(animateCursor)
      }
      animateCursor()
      window.$('a, button').hover(() => window.$('.cursor').addClass('active'), () => window.$('.cursor').removeClass('active'))
    }
    const cursorTimer = setTimeout(initCursor, 600)

    return () => {
      cancelled = true
      clearTimeout(timer)
      clearTimeout(slickTimer)
      clearTimeout(cursorTimer)
      // Re-enable main styles when leaving
      const mainSt = document.getElementById('main-styles')
      if (mainSt) mainSt.disabled = false
      const landingSt = document.getElementById('landing-styles')
      if (landingSt) landingSt.remove()
      document.getElementById('landing-fonts')?.remove()
      document.getElementById('landing-fonts-preconnect2')?.remove()
      document.getElementById('landing-fonts-stylesheet')?.remove()
      // Kill GSAP ScrollTrigger instances and matchMedia queries
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach(t => t.kill())
      mm?.revert()
      // Tear down Lenis
      if (lenisRafId) cancelAnimationFrame(lenisRafId)
      lenis?.destroy()
      // Tear down cursor rAF loop and jQuery handlers
      if (cursorRafId) cancelAnimationFrame(cursorRafId)
      if (window.$) {
        window.$(document).off('mousemove.itstaffcursor')
        window.$('a, button').off('mouseenter mouseleave')
      }
      // Tear down Slick instances if initialized
      if (window.$ && window.$.fn && window.$.fn.slick) {
        if (window.$('.my-slider').hasClass('slick-initialized')) window.$('.my-slider').slick('unslick')
        if (window.$('.slider').hasClass('slick-initialized')) window.$('.slider').slick('unslick')
      }
    }
  }, [])

  return (
    <div style={{ margin: 0 }}>
      <div className="container-fluid mx-auto m-0 p-0">
        {/* Header */}
        <section className="container-fluid header">
          <div className="container">
            <div className="mt-5">
              <img width="150" src="/assets/img/logo-dark1.png" alt="Ixly Logo" />
            </div>
            <div>
              <div id="resumesImg" className="resumes-img-container image-stack">
                <img width="278" height="406" id="resume1" className="resume resume1" src="/images/resume1.png" alt="" style={{ opacity: 0 }} />
                <img width="278" height="406" id="resume2" className="resume resume2" src="/images/resume2.png" alt="" style={{ opacity: 0 }} />
                <img width="278" height="406" id="resume3" className="resume resume3" src="/images/resume3.png" alt="" style={{ opacity: 0 }} />
              </div>
              <div>
                <h1 className="section-title text-center mt-n5" style={{ marginTop: '-100px', position: 'relative', zIndex: 9 }}>
                  IT Staff Augmentation Services to Scale Your Development Team Faster
                </h1>
              </div>
              <div>
                <p className="white-txt px-5">
                  Scale your engineering team with pre-vetted developers across .NET, Java, Python, React, Angular, Magento, Salesforce, SAP, AI, Data Engineering, QA, Cloud, and DevOps. Onboard experienced professionals within 48–72 hours while maintaining complete control over your project.
                </p>
              </div>
              <div className="text-center">
                <Link className="gradient-btn mobile-btn m-3" style={{ textDecoration: 'none' }} to="/contact-us">
                  <img width="20" src="/images/icon-reporting.png" alt="" className="mr-2" /> &nbsp; Get Free Consultation
                </Link>
                <button className="gradient-btn mobile-btn m-3" type="button" data-bs-toggle="modal" data-bs-target="#hire">
                  <img className="mr-2" width="20" src="/images/icon-developer.png" alt="" /> &nbsp; Hire Developers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section>
          <div className="text-center mt-5 w-100">
            <h2 className="text-center">Trusted by</h2>
          </div>
          <div className="trust-bg">
            <div className="scroller_container w-100 mt-5">
              <div className="scroller">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Fragment key={i}>
                    <div className="slide bg-white">
                      <img src="/images/Kanini.png" alt="" />
                    </div>
                    <div className="slide">
                      <img src="/images/deloitte.png" alt="" />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="scroller_container w-100">
              <div className="scroller-right">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Fragment key={i}>
                    <div className="slide-text"><span>50+</span> Engineers</div>
                    <div className="slide-text"><span>100+ </span> Projects Delivered</div>
                    <div className="slide-text"><span>10+ </span> Years Experience</div>
                    <div className="slide-text"><span>95% </span> Client Retention</div>
                    <div className="slide-text"><span>24–72 </span>Hour Deployment</div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us mt-5 py-5">
          <div className="container">
            <h2 className="text-center mobile-show desktop-hide">Why Choose Us?</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="slide-container">
                  <div id="carousel">
                    <figure><div className="img-border"><img src="/images/resume1.png" alt="" /></div></figure>
                    <figure><div className="img-border"><img src="/images/resume2.png" alt="" /></div></figure>
                    <figure><div className="img-border"><img src="/images/resume3.png" alt="" /></div></figure>
                    <figure><div className="img-border"><img src="/images/resume1.png" alt="" /></div></figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-left w-100 mb-5">
                  <h2 className="text-left mobile-hide">Why Choose Us?</h2>
                </div>
                <div>
                  {[
                    { icon: '/images/icon-fast-hiring.png', title: 'Faster Hiring', value: 'Skip months of recruitment.' },
                    { icon: '/images/icon-scale-up.png', title: 'Flexible Scaling', value: 'Scale up or down based on project demand.' },
                    { icon: '/images/icon-developer.png', title: 'Dedicated Developers', value: 'Developers work exclusively for you.' },
                    { icon: '/images/icon-nohr.png', title: 'No Recruitment Cost', value: 'No HR overhead or payroll burden.' },
                    { icon: '/images/icon-reporting.png', title: 'Complete Transparency', value: 'Daily reporting and direct communication.' },
                    { icon: '/images/icon-protection.png', title: 'Enterprise Ready', value: 'NDA, IP Protection, Secure Access, Compliance.' },
                  ].map((item) => (
                    <div className="row choose-link mobile-center mb-4" key={item.title}>
                      <div className="col-lg-1">
                        <img className="pt-3" width="30" src={item.icon} alt="" />
                      </div>
                      <div className="col-lg-11">
                        <div className="row">
                          <div className="col-12 why-choose-us-title">{item.title}</div>
                          <div className="col-12 why-choose-us-value">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Are you facing - desktop */}
        <section className="issues-bg py-5 mobile-hide">
          <div className="left-issues">
            <div id="issue1" className="isssues-txt gradient-btn">Hiring delays?</div>
            <div id="issue2" className="isssues-txt gradient-btn">Tight project deadlines</div>
            <div id="issue3" className="isssues-txt gradient-btn">Budget constraints</div>
            <div id="issue4" className="isssues-txt gradient-btn">Skill shortages</div>
          </div>
          <div id="issues-img" className="green-bg text-center">
            <div>
              <img width="220" style={{ marginTop: '-50px' }} src="/images/confusion.png" alt="" />
            </div>
            <div className="black-bg">
              <h2>Are you facing?</h2>
            </div>
          </div>
          <div className="right-issues">
            <div id="issue5" className="isssues-txt gradient-btn">High employee attrition</div>
            <div id="issue6" className="isssues-txt gradient-btn">Need niche technology experts</div>
            <div id="issue7" className="isssues-txt gradient-btn">Temporary project spikes</div>
            <div id="issue8" className="isssues-txt gradient-btn">Digital transformation initiatives</div>
          </div>
        </section>

        {/* Are you facing - mobile */}
        <section className="issues-bg py-5 mobile-show desktop-hide">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="green-bg text-center">
                  <div>
                    <img width="220" style={{ marginTop: '-50px' }} src="/images/confusion.png" alt="" />
                  </div>
                  <div className="black-bg">
                    <h2>Are you facing?</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="mobile-issues-txt">
                  <li>Hiring delays?</li>
                  <li>Tight project deadlines</li>
                  <li>Budget constraints</li>
                  <li>Skill shortages</li>
                  <li>High employee attrition</li>
                  <li>Need niche technology experts</li>
                  <li>Temporary project spikes</li>
                  <li>Digital transformation initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Staff Augmentation Services */}
        <section className="services-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 d-flex align-items-center mobile-center">
                <p className="whiteTxt mobile-center">Our Staff Augmentation Services</p>
              </div>
              <div className="col-lg-7">
                <div className="my-slider mobile-hide">
                  <div className="slidegrid-desktop mobile-hide">
                    <div className="card"><div><img src="/images/DedicatedDevelopers.png" alt="" /></div><div className="card-title">Dedicated Developers</div></div>
                    <div className="card"><div><img src="/images/expand.png" alt="" /></div><div className="card-title">Team Extension</div></div>
                    <div className="card"><div><img src="/images/offshore.png" alt="" /></div><div className="card-title">Offshore Development Center</div></div>
                    <div className="card"><div><img src="/images/remote.png" alt="" /></div><div className="card-title">Remote Development Team</div></div>
                  </div>
                  <div className="slidegrid-desktop mobile-hide">
                    <div className="card"><div><img width="300" src="/images/contract.png" alt="" /></div><div className="card-title">Contract Staffing</div></div>
                    <div className="card"><div><img src="/images/expand.png" alt="" /></div><div className="card-title">Build Operate Transfer</div></div>
                    <div className="card"><div><img src="/images/team.png" alt="" /></div><div className="card-title">Project-based Team</div></div>
                    <div className="card"><div><img src="/images/scrub.png" alt="" /></div><div className="card-title">Managed Team</div></div>
                  </div>
                </div>
                <div className="my-slider mobile-show desktop-hide">
                  {[
                    { img: '/images/DedicatedDevelopers.png', title: 'Dedicated Developers' },
                    { img: '/images/expand.png', title: 'Team Extension' },
                    { img: '/images/offshore.png', title: 'Offshore Development Center' },
                    { img: '/images/remote.png', title: 'Remote Development Team' },
                    { img: '/images/contract.png', title: 'Contract Staffing', width: 300 },
                    { img: '/images/DedicatedDevelopers.png', title: 'Build Operate Transfer' },
                    { img: '/images/team.png', title: 'Project-based Team' },
                    { img: '/images/scrub.png', title: 'Managed Team' },
                  ].map((item, i) => (
                    <div className="slidegrid mobile-show desktop-hide" key={i}>
                      <div className="card"><div><img width={item.width} src={item.img} alt="" /></div><div className="card-title">{item.title}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Hiring Process - desktop pinned scroll */}
        <section className="hiring-bg pin-section mobile-hide desktop-show">
          <article className="horizontal-scroll pt-5 mt-5 slow">
            <header><h2 style={{ color: '#ffffff' }}>Our Hiring Process</h2></header>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <figure key={n}><picture><img src={`/images/hire-process-${n}.png`} alt="hiring process" /></picture></figure>
            ))}
          </article>
        </section>

        {/* Our Hiring Process - mobile slider */}
        <section className="mobile-show desktop-hide">
          <div className="container mt-5">
            <h2 className="text-center">Our Hiring Process</h2>
            <div className="mt-4">
              <section className="slider-wrapper">
                <div className="slider">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <div key={n}><img src={`/images/hire-process-${n}.png`} alt="" /></div>
                  ))}
                </div>
              </section>
              <div className="slider-progress"><div className="progress"></div></div>
            </div>
          </div>
        </section>

        {/* Technologies We Provide */}
        <section className="technology-bg">
          <div className="container">
            <div className="text-center mt-5 w-100">
              <h2 className="text-center">Technologies We Provide</h2>
            </div>
            <div className="row service-box-wrap mt-5">
              <div className="col-md-4">
                <div className="service-box">
                  <h4>Microsoft</h4><hr />
                  <ul><li>.NET</li><li>Azure</li><li>Power Platform</li><li>SharePoint</li><li>Dynamics 365</li></ul>
                </div>
                <div className="service-box">
                  <h4>Frontend</h4><hr />
                  <ul><li>React</li><li>Angular</li><li>Vue</li><li>Next.js</li></ul>
                </div>
                <div className="service-box">
                  <h4>Backend</h4><hr />
                  <ul><li>Java</li><li>Node</li><li>Python</li><li>PHP</li><li>Laravel</li></ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <h4>Mobile</h4><hr />
                  <ul><li>Flutter</li><li>React Native</li><li>Andriod</li><li>ios</li></ul>
                </div>
                <div className="service-box">
                  <h4>Ecommerce</h4><hr />
                  <ul><li>Magento</li><li>Shopify</li><li>WooCommerce</li><li>BigCommerce</li></ul>
                </div>
                <div className="service-box">
                  <h4>Cloud</h4><hr />
                  <ul><li>AWS</li><li>Azure</li><li>GCP</li></ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <h4>DevOps</h4><hr />
                  <ul><li>Docker</li><li>Kubernetes</li><li>Jenkins</li><li>Terraform</li></ul>
                </div>
                <div className="service-box">
                  <h4>QA</h4><hr />
                  <ul><li>Selenium</li><li>Cypress</li><li>Playwright</li><li>JMeter</li></ul>
                </div>
                <div className="service-box">
                  <h4>AI</h4><hr />
                  <ul><li>OpenAI</li><li>LangChain</li><li>Python</li><li>RAG</li><li>Machine Learning</li></ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="services-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 d-flex align-items-center mobile-center">
                <p className="whiteTxt mobile-center">Engagement Models</p>
              </div>
              <div className="col-lg-7">
                <div className="my-slider mobile-hide">
                  <div className="slidegrid-desktop mobile-hide">
                    <div className="card"><div><img src="/images/DedicatedDevelopers.png" alt="" /></div><div className="card-title">Dedicated Developer<div>Full-time resource</div></div></div>
                    <div className="card"><div><img src="/images/expand.png" alt="" /></div><div className="card-title">Team Augmentation<div>Extend existing team</div></div></div>
                  </div>
                  <div className="slidegrid-desktop mobile-hide">
                    <div className="card"><div><img src="/images/offshore.png" alt="" /></div><div className="card-title">Offshore Development Team<div>Complete offshore squad</div></div></div>
                    <div className="card"><div><img src="/images/remote.png" alt="" /></div><div className="card-title">Fixed Cost Project<div>Defined scope</div></div></div>
                  </div>
                  <div className="slidegrid-desktop mobile-hide">
                    <div className="card"><div><img width="300" src="/images/contract.png" alt="" /></div><div className="card-title">Time &amp; Material<div>Flexible scope</div></div></div>
                  </div>
                </div>
                <div className="my-slider mobile-show desktop-hide">
                  {[
                    { img: '/images/DedicatedDevelopers.png', title: 'Dedicated Developers', sub: 'Full-time resource' },
                    { img: '/images/expand.png', title: 'Team Extension', sub: 'Extend existing team' },
                    { img: '/images/offshore.png', title: 'Offshore Development Center', sub: 'Complete offshore squad' },
                    { img: '/images/remote.png', title: 'Fixed Cost Project', sub: 'Defined scope' },
                    { img: '/images/contract.png', title: 'Time & Material', sub: 'Flexible scope', width: 300 },
                  ].map((item, i) => (
                    <div className="slidegrid mobile-show desktop-hide" key={i}>
                      <div className="card"><div><img width={item.width} src={item.img} alt="" /></div><div className="card-title">{item.title}<div>{item.sub}</div></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table - desktop */}
        <section className="mobile-hide">
          <div className="text-center mt-5 w-100">
            <h2 className="text-center mb-5">Why Companies Choose IXLY</h2>
          </div>
          <div className="container table-wrapper comparision-tbl text-center">
            <table className="w-100" style={{ background: 'transparent' }}>
              <thead>
                <tr>
                  <th width="33.33%" className="pb-5"> </th>
                  <th width="33.33%" className="tbl-green-title text-center pb-5" align="center">TRADITIONAL HIRING</th>
                  <th width="33.33%" className="text-center pb-5" align="center"><img src="/images/ixly-logo.png" width="100" alt="" /></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'DURATION', trad: '30-90 Days', ixly: 'Hire in 48 Hours' },
                  { label: 'COST', trad: 'High HR Cost', ixly: 'No Recruitment Cost' },
                  { label: 'HIRING TYPE', trad: 'Permanent Hiring', ixly: 'Flexible Contracts' },
                  { label: 'SCALING', trad: 'Difficult', ixly: 'Scale Anytime' },
                  { label: 'REPLACEMENT', trad: 'Slow Hiring', ixly: 'Immediate Replacement' },
                  { label: 'PAYROLL', trad: 'Payroll Management', ixly: 'No Payroll Burden' },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="tbl-green-title pt-5">{row.label}</td>
                    <td className="pt-5">{row.trad}</td>
                    <td className="pt-5"><img className="pl-4" src="/images/icon-check.png" alt="Check" style={{ marginLeft: '25px', marginRight: '10px' }} /> {row.ixly}</td>
                  </tr>
                ))}
                <tr>
                  <td className="tbl-green-title"></td>
                  <td></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison table - mobile */}
        <section className="desktop-hide mobile-show">
          <div className="text-center mt-5 w-100">
            <h2 className="text-center mb-4">Why Companies Choose IXLY</h2>
          </div>
          <div className="container text-center">
            <div className="table-img">
              <img src="/images/ixly-logo.png" width="150" alt="" />
              <div className="mobile-table-wrapper p-3 mt-4">
                <ul>
                  <li>Hire in 48 Hours</li>
                  <li>No Recruitment Cost</li>
                  <li>Flexible Contracts</li>
                  <li>Scale Anytime</li>
                  <li>Immediate Replacement</li>
                  <li>No Payroll Burden</li>
                </ul>
                <div className="text-center">
                  <button className="gradient-btn mobile-btn m-3" type="button" data-bs-toggle="modal" data-bs-target="#hire">
                    <img className="mr-2" width="20" src="/images/icon-developer.png" alt="" /> &nbsp; Hire Developers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="contact-content">
          <div className="container pt-5">
            <h2 className="section-title text-center">Global Presence</h2>
            <p className="section-subtitle mt-4">Strategically Located. Globally Connected.</p>
            <a className="brand-logo" href="https://ixlytechnologies.com"><img width="180" src="/images/ixly-logo.png" alt="" /></a>
            <div className="row col-lg-8 m-auto contact-box-wrap mt-5">
              <div className="col-lg-6">
                <div className="contact-box">
                  <h4>India Office</h4><hr />
                  <p>#B3 Forge, KCT Tech Park,<br /> Thudiyalur Road, Saravanampatti,<br /> Coimbatore – 641049, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box">
                  <h4>Connect</h4><hr />
                  <ul>
                    <li><a href="tel:+918148001444">+91 81480 01444</a></li>
                    <li><a href="mailto:cst@ixly.in">cst@ixly.in</a></li>
                    <li><a href="https://ixlytechnologies.com" target="_blank" rel="noreferrer">www.ixlytechnologies.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cursor elements */}
        <div className="cursor"></div>
        <div className="cursor cursor2"></div>

        {/* Modal */}
        <div className="modal fade" id="hire">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Lets Discuss Your Project</h4>
                <button className="close-img-btn">
                  <img width="30" data-bs-dismiss="modal" src="/images/Cancel.png" alt="" />
                </button>
              </div>
              <div className="modal-body pt-0 mt-0">
                <div className="mb-4">
                  <label htmlFor="hire-name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="hire-name" placeholder="Enter Full Name" name="Fullname" />
                </div>
                <div className="mb-4 mt-3">
                  <label htmlFor="hire-email" className="form-label">Email ID</label>
                  <input type="email" className="form-control" id="hire-email" placeholder="Enter Email ID" name="Email" />
                </div>
                <div className="mb-4 mt-3">
                  <label htmlFor="hire-phone" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="hire-phone" placeholder="Enter Phone Number" name="Phonenumber" />
                </div>
                <div className="mb-4 mt-3">
                  <label htmlFor="hire-requirement">Requirement</label>
                  <textarea className="form-control" rows="5" id="hire-requirement" name="text" placeholder="Enter Requirement"></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-grid">
                  <button type="button" className="btn gradient-btn w-100" data-bs-dismiss="modal">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section className="bottom_footer">
        <div className="container">
          <p>© 2013 – 2026 Ixly Technologies. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  )
}
