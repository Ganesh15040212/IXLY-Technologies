import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Layout from '../components/Layout'
import { clientLogos } from '../data/clients'

export default function CaseStudy() {
  useEffect(() => {
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
      swiper?.destroy(true, true)
    }
  }, [])

  return (
    <Layout title="Case Study - IXLY Technologies">
      <div className="bodybg bodybg1">
        <section className="container text-center banner_head">
          <h2>Crafting Creativity, <br /> Delivering Excellence <b>Portfolio</b></h2>
        </section>
        <section className="container projects_lists">
          <div className="proli">
            <Link to="/isha-woocommerce">
              <div className="images">
                <img className="img7" src="/assets/img/sample.png" alt="" loading="lazy" />
                <img className="img8" src="/assets/img/isha1.png" alt="" loading="lazy" />
              </div>
              <div className="prodet">
                <h5>Isha Life</h5>
                <p>Adobe Magento</p>
              </div>
            </Link>
          </div>
          <div className="proli1">
            <Link to="/awnopy">
              <div className="prodet1">
                <h5>Awnopy</h5>
                <p>Adobe Magento</p>
              </div>
              <div className="images1">
                <img className="img9" src="/assets/img/awnopy2.png" alt="" loading="lazy" />
                <img className="img10" src="/assets/img/awnopy1.png" alt="" loading="lazy" />
              </div>
            </Link>
          </div>
        </section>
        {/* Our Clients */}
        <section>
          <div className="our_clients container">
            <div className="row col-md-12">
              <div className="col-md-3 zin">
                <h3 className="highlighttext">Clients</h3>
                <h2>Our <br /> Clients</h2>
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
        <section className="prepare_bg">
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-9 zin"><h3>Preparing For Your Business.<br />Success With IT Solution</h3></div>
              <div className="col-md-3 zin"><a href="#">Meet With Us</a></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
