import { NavLink, Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Header() {
  return (
    <div className="header">
      <section className="top_header">
        <div className="container">
          <div className="row col-md-12">
            <div className="col-9">
              <ul className="list-inline">
                <li className="list-inline-item">+91 8148001444</li>
                <li className="list-inline-item">cst@ixly.in</li>
              </ul>
            </div>
            <div className="col-3 text-end">
              <a href="https://in.linkedin.com/company/ixly-technologies" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin" style={{ color: '#0a66c2' }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo-dark1.png" alt="Ixly Technologies Logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>Home</NavLink>
                </li>
                {/* Mega Menu */}
                <li className="nav-item dropdown position-static">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/services"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </NavLink>
                  <div className="dropdown-menu mega-menu">
                    <div className="mega-menu-container">
                      <div className="mega-menu-left">Services</div>
                      <div className="mega-menu-right">
                        <div className="row">
                          {services.slice(0, 3).map((service) => (
                            <div className="col-md-4" key={service.slug}>
                              <Link to={`/services#${service.slug}`}>
                                <div className="mega-menu-title">{service.title}</div>
                                <p className="dropdown-item">{service.description}</p>
                              </Link>
                            </div>
                          ))}
                        </div>
                        <div className="row mt-3">
                          {services.slice(3, 6).map((service) => (
                            <div className="col-md-4" key={service.slug}>
                              <Link to={`/services#${service.slug}`}>
                                <div className="mega-menu-title">{service.title}</div>
                                <p className="dropdown-item">{service.description}</p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/domain-expertise">Domain Expertise</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/case-study">Case Study</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
