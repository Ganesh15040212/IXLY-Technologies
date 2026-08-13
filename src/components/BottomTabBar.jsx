import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', icon: 'fa-house', end: true },
  { to: '/services', label: 'Services', icon: 'fa-layer-group' },
  { to: '/domain-expertise', label: 'Domain', icon: 'fa-diagram-project' },
  { to: '/case-study', label: 'Cases', icon: 'fa-folder-open' },
  { to: '/about-us', label: 'About', icon: 'fa-circle-info' },
  { to: '/contact-us', label: 'Contact', icon: 'fa-phone' },
]

export default function BottomTabBar() {
  return (
    <nav className="bottom-tab-bar d-lg-none">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => `bottom-tab-bar-item${isActive ? ' active' : ''}`}
        >
          <i className={`fa-solid ${tab.icon}`}></i>
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
