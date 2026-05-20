import { NavLink } from 'react-router-dom';
import { useFinance } from '../context/FinanceContext';
import './Navbar.css';

const NAV = [
  { to: '/', label: 'Dashboard', icon: '⬡' },
  { to: '/transactions', label: 'Transactions', icon: '⇄' },
  { to: '/add', label: 'Add', icon: '+', cta: true },
  { to: '/charts', label: 'Charts', icon: '▦' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useFinance();

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
        <button className="nav-theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
