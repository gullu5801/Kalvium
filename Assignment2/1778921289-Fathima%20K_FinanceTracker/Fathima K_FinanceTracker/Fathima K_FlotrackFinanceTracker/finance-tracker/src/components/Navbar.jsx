import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV = [
  { to: '/', label: 'Dashboard', icon: '⬡' },
  { to: '/transactions', label: 'Transactions', icon: '⇄' },
  { to: '/add', label: 'Add', icon: '+', cta: true },
  { to: '/charts', label: 'Charts', icon: '▦' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="nav-logo">◈</span>
        <span className="nav-title">Flo<em>track</em></span>
      </div>
      <div className="nav-links">
        {NAV.map(n => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${n.cta ? 'nav-cta' : ''}`}
          >
            <span className="nav-icon">{n.icon}</span>
            <span>{n.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
