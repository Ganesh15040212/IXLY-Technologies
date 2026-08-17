import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_menu row col-md-12">
            <div className="col-md-4">
              <img src="/assets/img/logo-dark1.png" alt="Ixly Technologies" loading="lazy" />
              <p>Ixly Technologies is in the forefront of providing innovative business solutions by adapting upcoming technologies and trends to leverage their competency which translates in to cutting edge digital offerings that are result oriented, budget friendly and profitable ventures for customers.</p>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-center text-center">
              <h6>Services</h6>
              <ul className="list-inline">
                {services.map((service) => (
                  <li key={service.slug}><Link to={`/services#${service.slug}`}>{service.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-md-5 contactus">
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
