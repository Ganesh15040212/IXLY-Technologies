import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/services'

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_menu row col-md-12">
            <div className="col-md-3">
              <img src="/assets/img/logo-dark1.png" alt="Ixly Technologies" loading="lazy" />
              <p>Ixly Technologies is in the forefront of providing innovative business solutions by adapting upcoming technologies and trends to leverage their competency which translates in to cutting edge digital offerings that are result oriented, budget friendly and profitable ventures for customers.</p>
            </div>
            <div className="col-md-2 d-flex flex-column align-items-center text-center">
              <h6>Services</h6>
              <ul className="list-inline">
                {services.map((service) => (
                  <li key={service.slug}><Link to={`/services#${service.slug}`}>{service.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Blog</h6>
              {isHome ? (
                <>
                  <div className="blog">
                    <img src="/assets/img/asp-net-3.webp" alt="blog" loading="lazy" />
                    <span>🌟 Hiring a .NET developer from IXLY Technologies in Coimbatore could be a strategic move to elevate your .NET applic.... </span>
                  </div>
                  <hr />
                  <div className="blog">
                    <img src="/assets/img/magento-banner.png" alt="blog" loading="lazy" />
                    <span>🌟 Hiring a dedicated Magento developer from Ixly Technologies can be a strategic move to elevate your e-commerce busi.... </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="blog">
                    <img src="/assets/img/nasscom-event-blog.png" alt="blog" loading="lazy" />
                    <span>🌟 Reflecting on an Inspiring Event! 🌟 <br />Two weeks before, we had the privilege of attending the NASSCOM Global Inclu.... </span>
                  </div>
                  <hr />
                  <div className="blog">
                    <img src="/assets/img/nasscom-event-blog.png" alt="blog" loading="lazy" />
                    <span>🌟 Reflecting on an Inspiring Event! 🌟 <br /> Two weeks before, we had the privilege of attending the NASSCOM Global Inclu.... </span>
                  </div>
                </>
              )}
            </div>
            <div className="col-md-3 contactus">
              <h6>Contact Us</h6>
              <div>
                <h5>Address</h5>
                <p>#9/9b, 2nd Floor,Usha Singh Building,{'\u2028'}V G Hospital Bus Stop, Thudiyalur,{'\u2028'}Coimbatore – 641034, Tamilnadu, India.</p>
              </div>
              <hr />
              <div>
                <h5>Phone</h5>
                <p><u>91 8148001444</u></p>
              </div>
              <hr />
              <div>
                <h5>Email</h5>
                <p><u><a href="mailto:cst@ixly.in">cst@ixly.in</a></u></p>
              </div>
              <hr />
              <div>
                <a href="https://in.linkedin.com/company/ixly-technologies" target="_blank" rel="noreferrer">
                  <i style={{ color: 'rgba(128, 128, 128, 1)' }} className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bottom_footer">
        <div className="container">
          <p>© 2013 – 2026 Ixly Technologies. All Rights Reserved.</p>
        </div>
      </section>
    </>
  )
}
