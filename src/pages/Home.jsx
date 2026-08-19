import { useEffect } from 'react'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Layout from '../components/Layout'
import ClientReview from '../components/ClientReview'
import { clientLogos } from '../data/clients'
import { homeServiceBoxes } from '../data/homeServiceBoxes'

export default function Home() {
  useEffect(() => {
    // Bootstrap carousel
    const el = document.querySelector('#carouselExampleIndicators')
    let carousel
    if (el && window.bootstrap) {
      carousel = new window.bootstrap.Carousel(el, { interval: 5000, ride: 'carousel', pause: false })
    }
    // Swiper for clients
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay],
      slidesPerView: 2,
      spaceBetween: 8,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: { slidesPerView: 3, spaceBetween: 10 },
      },
    })

    return () => {
      carousel?.dispose()
      swiper?.destroy(true, true)
    }
  }, [])

  return (
    <Layout title="Ixly Technologies offers cutting-edge Digital Transformation Services">
      <div className="bodybg">
        {/* Banner Carousel */}
        <section>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/assets/img/Banner1.png" className="d-block w-100" alt="Slide 1" />
                <div className="carousel-caption d-md-block slidetext1">
                  <h3>Crafting meaningful <br /> Digital Experience</h3>
                  <p>Tailored Digital Solution - Creating Impact.</p>
                  <a href="#">Learn more..</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/assets/img/Banner2.png" className="d-block w-100" alt="Slide 2" />
                <div className="carousel-caption d-md-block slidetext2">
                  <h5>Services</h5>
                  <h3>Digital <br /> Transformation</h3>
                  <p>ECommerce, Cloud, AI &amp; ML, <br /> IoT &amp; Microservices</p>
                  <a href="#">Learn more..</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services container">
          <h3 className="highlighttext">Services</h3>
          <h4>We deal with the aspects of <br /> <span className="boldtext">Professional IT Services</span></h4>
          <div className="row col-md-12 service_boxes">
            {homeServiceBoxes.map((service) => (
              <div className="col-md-3 hover-box" key={service.key}>
                <img src={service.icon} alt="" loading="lazy" />
                <img className="opac" src={service.iconHover} alt="" loading="lazy" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prepare CTA */}
        <section className="prepare_bg">
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-9 zin">
                <h3>Preparing For Your Business.<br />Success With IT Solution</h3>
              </div>
              <div className="col-md-3 zin">
                <a href="#">Meet With Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section>
          <div className="portfolio container">
            <div className="row col-md-12">
              <div className="col-md-5 zin">
                <h3 className="highlighttext">Portfolio</h3>
                <h2>OUR WORK</h2>
                <p>Health Care Application</p>
                <ul className="list-inline">
                  <li>Mobile App</li>
                  <li></li>
                  <li>Mobile App</li>
                </ul>
                <a href="#">Learn More</a>
              </div>
              <div className="col-md-7 zin posrel">
                <img className="img1" src="/assets/img/sample.png" alt="" loading="lazy" />
                <img className="img2" src="/assets/img/b.png" alt="" loading="lazy" />
                <img className="img3" src="/assets/img/mob.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section>
          <div className="our_clients container">
            <div className="row col-md-12">
              <div className="col-md-3 zin">
                <h3 className="highlighttext">Clients</h3>
                <h2>Our Clients</h2>
              </div>
              <div className="col-md-9 zin">
                <div className="swiper">
                  <ul className="swiper-wrapper list-inline">
                    {clientLogos.map((client) => (
                      <li className="swiper-slide" key={client.key}>
                        <img src={client.primary} style={client.grayscale ? { filter: 'grayscale(100%)' } : undefined} alt="" />
                        <img src={client.secondary} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Company */}
        <section>
          <div className="about_company portfolio container">
            <div className="row col-md-12">
              <div className="col-md-6 zin">
                <h3 className="highlighttext">ABOUT COMPANY</h3>
                <h2>We are <br /> Digitally Innate.</h2>
                <p>Ixly Technologies is in the forefront of providing innovative business solutions by adapting upcoming technologies and trends to leverage their competency which translates in to cutting edge digital offerings that are result oriented, budget friendly and profitable ventures for customers.</p>
                <ul className="list-inline">
                  <li>. BUSINESS CENTRIC SOLUTION</li>
                  <li>. DIGITAL TRANSFORMATION</li>
                  <li>. LATEST TECHNOLOGY</li>
                </ul>
                <a href="#">Learn More</a>
              </div>
              <div className="col-md-6 zin posrel text-end">
                <img className="img4" src="/assets/img/about-company-banner.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Client Review */}
        <ClientReview />

        {/* Clients Logos */}
        <section className="container clients text-center zin">
          <h3 className="highlighttext">CLIENTS</h3>
          <h4>Participation &amp; Certification</h4>
          <div className="logos">
            <ul className="list-inline">
              <li><img src="/assets/img/Nasscom-logo-svg.svg.png" alt="Nasscom" loading="lazy" /></li>
              <li><img src="/assets/img/magento-1-logo-png-transparent.png" alt="Magento" loading="lazy" /></li>
              <li><img src="/assets/img/Internet2-0_Logo_MASTER_POS_HR.png" alt="Internet" loading="lazy" /></li>
              <li><img src="/assets/img/cert-certification-badge.png" alt="" loading="lazy" /></li>
              <li><img src="/assets/img/GITEX_GLOBAL_LOGO_2023_1.png" alt="Gitex" loading="lazy" /></li>
              <li><img src="/assets/img/Nasscom-logo-svg.svg.png" alt="Nasscom" loading="lazy" /></li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}
