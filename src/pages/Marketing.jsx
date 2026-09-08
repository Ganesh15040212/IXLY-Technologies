import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Layout from '../components/Layout'

export default function Marketing() {
  useEffect(() => {
    // Layout (below) loads the main site's styles.css; this page just adds its
    // own extra rules on top.
    if (!document.getElementById('marketing-styles')) {
      const marketingStyles = document.createElement('link')
      marketingStyles.id = 'marketing-styles'
      marketingStyles.rel = 'stylesheet'
      marketingStyles.href = '/css/marketing.css'
      document.head.appendChild(marketingStyles)
    }

    const swipers = []
    for (let i = 1; i <= 10; i++) {
      const el = document.querySelector(`.swiper-${i}`)
      if (!el) continue
      swipers.push(
        new Swiper(el, {
          modules: [Autoplay],
          slidesPerView: 5,
          spaceBetween: 10,
          loop: false,
          autoplay: { delay: 3000, disableOnInteraction: false },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          },
        })
      )
    }
    for (let j = 1; j <= 2; j++) {
      const el = document.querySelector(`.trusted-swiper-${j}`)
      if (!el) continue
      swipers.push(
        new Swiper(el, {
          modules: [Autoplay],
          slidesPerView: 5,
          spaceBetween: 10,
          loop: false,
          autoplay: { delay: 3000, disableOnInteraction: false },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          },
        })
      )
    }

    return () => {
      // Swiper's destroy() can throw if the slide nodes are already gone by the
      // time this runs (React can remove them around the same moment) - never
      // let that stop the stylesheet cleanup below from running.
      swipers.forEach((s) => {
        try {
          s.destroy(true, true)
        } catch {
          // already torn down along with its DOM - nothing left to clean up
        }
      })
      document.getElementById('marketing-styles')?.remove()
    }
  }, [])

  return (
    <Layout title="Marketing - Ixly Technologies">
      <div className="bodybg bodybg1 page-content">
        <section className="main-banner">
          <div id="banner" className="marketing-banner">
            <div className="banner-item">
              <div className="container">
                <div className="banner-caption d-md-block">
                  <h1>Your Technology Partner for<br />the Future</h1>
                  <p>Tailored Digital Solution - Creating Impact.</p>
                  <Link to="/">Lean More</Link>
                </div>
                <Link to="/" className="site-link">www.ixlytechnologies.com</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="promo-content">
          <div className="container">
            <h3 className="section-title">About Us</h3>
            <p className="section-subtitle">Powered by Expertise. Inspired by Ideas.</p>
            <div className="row promo-box-wrap mt-5">
              <div className="col-md-4 px-4">
                <h3>Overview</h3>
                <hr />
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>50+</h4>
                    <p>Employees</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/team-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>1</h4>
                    <p>Head office</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/office-build-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>3</h4>
                    <p>Development Centers</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/development-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>13+</h4>
                    <p>Years in Business</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/office-100.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-4">
                <h3>Clientele</h3>
                <hr />
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>50+</h4>
                    <p>eCommerce Stores Built</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/e-commerce-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>4.7/5</h4>
                    <p>Client Google Rating</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/five-star-rating-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>4.0/5</h4>
                    <p>Employee Experience Score (AmbitionBox) </p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/resume-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>100%</h4>
                    <p>Global Delivery Standards</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/global-100.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-4">
                <h3>Achievements</h3>
                <hr />
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>91%</h4>
                    <p>Recurring Customers</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/client-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>11+</h4>
                    <p>Countries Serving Currently</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/world-map-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>20+</h4>
                    <p>Industry Verticals</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/web-design-100.png" alt="" />
                  </div>
                </div>
                <div className="promo-box">
                  <div className="promo-feature-content">
                    <h4>2M+</h4>
                    <p>Development Hours</p>
                  </div>
                  <div className="promo-feature-image">
                    <img src="/assets/img/future-100.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="what-we-do-content">
          <div className="container">
            <h3 className="section-title">What We Do</h3>
            <p className="section-subtitle">Accelerate Growth and Innovation</p>
            <div className="row">
              <div className="col-md-6 px-4">
                <div className="what-we-do-list my-5">
                  <h4>Team Augmentation</h4>
                  <hr />
                  <p>A team of Skilled developers, designers, and PMs assigned to your project who work as your Offshore team achieving goals together.</p>
                </div>
                <div className="what-we-do-list my-5">
                  <h4>Services</h4>
                  <hr />
                  <p><b>E-Commerce Development</b> – Custom online storefronts with seamless user experience</p>
                  <p><b>Cloud Strategy &amp; Consulting</b> – From adoption to optimization</p>
                  <p><b>AI &amp; ML Solutions</b> – Use case mapping, adoption strategy, and implementation</p>
                  <p><b>IoT Strategy</b> – Architecture design and rollout guidance</p>
                  <p><b>Microservices Consulting</b> – Pathway to scalable, modular systems</p>
                </div>
              </div>
              <div className="col-md-6 px-4">
                <div className="what-we-do-list my-5">
                  <h4>Technology Partner</h4>
                  <hr />
                  <p>We provide end-to-end IT consulting services to help businesses optimize technology, streamline operations, and drive digital transformation</p>
                </div>
                <div className="what-we-do-list my-5">
                  <h4>Design &amp; Innovation</h4>
                  <hr />
                  <p><b>UI/UX Ideation &amp; Branding</b></p>
                  <p><b>Mobile-First UX</b> for native and cross-platform apps</p>
                  <p><b>End-to-End Creative Strategy</b>, from research to interface optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-content">
          <div className="container">
            <h3 className="section-title">Services</h3>
            <p className="section-subtitle">Build Faster. Scale Smarter.</p>
            <div className="service-box-wrap mt-5">
              <div className="service-box">
                <h4>ECommerce</h4>
                <hr />
                <ul>
                  <li>End-to-End eCommerce Development</li>
                  <li>Platform Expertise</li>
                  <li>Store Optimization &amp; Growth</li>
                  <li>Custom Development</li>
                  <li>Maintenance and Support</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>Mobility</h4>
                <hr />
                <ul>
                  <li>Native Applications</li>
                  <li>Cross Platform Applications</li>
                  <li>Mobile First UX Design</li>
                  <li>Enterprise Mobility</li>
                  <li>Mobile App Marketing</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>QA &amp; Testing</h4>
                <hr />
                <ul>
                  <li>Functional Testing</li>
                  <li>Non-Functional Testing</li>
                  <li>Specialized Testing Services</li>
                  <li>Test Automation</li>
                  <li>Middleware Development</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>Web Development</h4>
                <hr />
                <ul>
                  <li>Core Services</li>
                  <li>Enterprise Business Solution</li>
                  <li>Content Management System</li>
                  <li>E-commerce Solutions</li>
                  <li>Middleware Development</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>Dedicated Team</h4>
                <hr />
                <ul>
                  <li>Frontend: React, Angular, Vue, JS</li>
                  <li>Backend: .NET, Java, Python, Node.js, PHP, ROR</li>
                  <li>Mobile: Android, iOS, Flutter, React Native</li>
                  <li>QA: Manual, Selenium, Cypress</li>
                  <li>eCommerce: Magento, Shopify, WooCommerce</li>
                  <li>Full Stack: MERN, MEAN</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>Cloud</h4>
                <hr />
                <ul>
                  <li>Strategy &amp; Assessment</li>
                  <li>Cloud Enablement</li>
                  <li>Lifecycle Management</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>UI/UX Design</h4>
                <hr />
                <ul>
                  <li>Research</li>
                  <li>User Experience (UX) Design</li>
                  <li>User Interface (UI) Design</li>
                  <li>Brand Design</li>
                  <li>Front End Development</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>AI &amp; ML</h4>
                <hr />
                <ul>
                  <li>Large Language Model</li>
                  <li>Predictive Analytics</li>
                  <li>Automated Data Processing</li>
                  <li>Anomaly Detection</li>
                  <li>Risk and Compliance</li>
                </ul>
              </div>
              <div className="service-box">
                <h4>DevOps</h4>
                <hr />
                <ul>
                  <li>DevOps Consulting</li>
                  <li>DevOps as a Service</li>
                  <li>DevOps Enablement</li>
                  <li>Smarter Environments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="expertise-content">
          <div className="container-fluid px-lg-5">
            <h3 className="section-title">Our Expertise</h3>
            <p className="section-subtitle">Experts for 100+ Technologies.</p>
            <div className="row service-box-wrap mt-5">
              <div className="col-md-6">
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Enterprise<br />Solutions</h4>
                    </div>
                    <div className="expertise-logos swiper-1 swiper">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/azure.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/NET-Core.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/ASP.NET-MVC.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/SharePoint.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/WPF.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/AWS.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Google-Cloud.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/VMware.webp" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Open Source &amp;<br />Backend</h4>
                    </div>
                    <div className="expertise-logos swiper-2">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/php.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Python.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/node.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Rails.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/go.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Laravel.webp" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Java<br />Ecosystem</h4>
                    </div>
                    <div className="expertise-logos swiper-3">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/java.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/spring.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/struts.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/hibernate.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/jsf.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/servlets-jsp.png" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Mobile<br />Development</h4>
                    </div>
                    <div className="expertise-logos swiper-4">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/iphone.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/android.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/flutter.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/reactnative.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/xamarin.png" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Frontend &amp;<br />UI/UX</h4>
                    </div>
                    <div className="expertise-logos swiper-5">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/reactjs.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Angular.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Vue-js.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/jquery.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/html.png" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Database &amp;<br />Big Data</h4>
                    </div>
                    <div className="expertise-logos swiper-6">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/oracle.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/sqlserver.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/postgresql.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/mongoDB.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Spark.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/hadoop.webp" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>AI, ML &amp;<br />Analytics</h4>
                    </div>
                    <div className="expertise-logos swiper-7">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/TensorFlow.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/PyTorch.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Scikit-Learn.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/R-Programming.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/PowerBI.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/TABLEAU.webp" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>DevOps &amp;<br />Automation</h4>
                    </div>
                    <div className="expertise-logos swiper-8">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Docker.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Kubernetes.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Jenkins.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/GitLabCICD.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Ansible.webp" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Blockchain &amp;<br />Emerging Tech</h4>
                    </div>
                    <div className="expertise-logos swiper-9">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/bitcoin.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/ethereum.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/hyperledger.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/multichanin.png" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/hyperledgerfabric.png" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="expertise-box">
                  <div className="expertise-box-wrap">
                    <div className="expertise-title">
                      <h4>Digital<br />Commerce &amp; ERP</h4>
                    </div>
                    <div className="expertise-logos swiper-10">
                      <div className="swiper-wrapper">
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Magento.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/WooCommerce.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/SAP.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/odoo.webp" alt="IXLY" width="auto" height="auto" /></div>
                        <div className="expertise-img swiper-slide"><img src="/assets/img/Salesforce.webp" alt="IXLY" width="auto" height="auto" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trusted-content">
          <div className="container px-lg-5">
            <h3 className="section-title">Trusted by<br />Clients Worldwide</h3>
            <p className="section-subtitle">Strong partnerships, proven results</p>
            <div className="row trusted-box-wrap mt-5">
              <div className="col-md-12">
                <div className="trusted-box">
                  <div className="trusted-box-wrap">
                    <div className="trusted-title">
                      <h4>Manufacturing</h4>
                    </div>
                    <div className="trusted-logos trusted-swiper-1">
                      <div className="swiper-wrapper">
                        <div className="trusted-img swiper-slide"><a href="https://awnopy.com/" target="_blank" rel="noreferrer"><img src="/assets/img/Awnopy.jpeg" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://probots.co.in/" target="_blank" rel="noreferrer"><img src="/assets/img/Probotlogo.webp" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://www.gokahraba.com/" target="_blank" rel="noreferrer"><img src="/assets/img/gokahraba.png" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://essentialoilbulk.com/" target="_blank" rel="noreferrer"><img src="/assets/img/essentialoilbulk.jpg" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://laureolaindustries.com/" target="_blank" rel="noreferrer"><img src="/assets/img/laureolaindustries.jpg" alt="IXLY" width="auto" height="auto" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trusted-box">
                  <div className="trusted-box-wrap">
                    <div className="trusted-title">
                      <h4>IT Services</h4>
                    </div>
                    <div className="trusted-logos trusted-swiper-2">
                      <div className="swiper-wrapper">
                        <div className="trusted-img swiper-slide"><a href="https://sbnasoftware.com/" target="_blank" rel="noreferrer"><img src="/assets/img/sbnasoftware.png" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://kanini.com/" target="_blank" rel="noreferrer"><img src="/assets/img/Kanini-Logo.svg" alt="IXLY" width="auto" height="30px" style={{ height: '30px' }} /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://www.riverstonetech.com/" target="_blank" rel="noreferrer"><img src="/assets/img/riverstone-tech-design-logo.png" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://synamen.com/" target="_blank" rel="noreferrer"><img src="/assets/img/synamen-logo.svg" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://www.zakapps.com/" target="_blank" rel="noreferrer"><img src="/assets/img/logo_za.svg" alt="IXLY" width="auto" height="auto" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trusted-box">
                  <div className="trusted-box-wrap">
                    <div className="trusted-title">
                      <h4>Others</h4>
                    </div>
                    <div className="trusted-logos trusted-swiper-2">
                      <div className="swiper-wrapper">
                        <div className="trusted-img swiper-slide"><a href="https://saamipya.in/" target="_blank" rel="noreferrer"><img src="/assets/img/saamipya.png" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://c4vyp.com/" target="_blank" rel="noreferrer"><img src="/assets/img/c4vyp.svg" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://callforcake.com/" target="_blank" rel="noreferrer"><img src="/assets/img/callforcake.png" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://chockochoza.com/" target="_blank" rel="noreferrer"><img src="/assets/img/chockochoza.png" alt="IXLY" width="auto" height="auto" /></a></div>
                        <div className="trusted-img swiper-slide"><a href="https://www.ebix.com/" target="_blank" rel="noreferrer"><img src="/assets/img/ebix.png" alt="IXLY" width="auto" height="auto" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-content">
          <div className="container">
            <h3 className="section-title">Global Presence</h3>
            <p className="section-subtitle">Strategically Located. Globally Connected.</p>
            <Link className="brand-logo" to="/"><img src="/assets/img/logo-dark1.png" alt="Ixly Technologies" /></Link>
            <div className="row col-md-8 m-auto contact-box-wrap mt-5">
              <div className="col-md-6">
                <div className="contact-box">
                  <h4>India Office</h4>
                  <hr />
                  <p>#B3 Forge, KCT Tech Park,<br /> Thudiyalur Road, Saravanampatti,<br /> Coimbatore – 641049, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-box">
                  <h4>Connect</h4>
                  <hr />
                  <ul>
                    <li><a href="tel:+918148001444">+91 81480 01444</a></li>
                    <li><a href="mailto:cst@ixly.in">cst@ixly.in</a></li>
                    <li><Link to="/">www.ixlytechnologies.com</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
