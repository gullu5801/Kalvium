import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', icon: '📊', label: 'Dashboard' },
  { to: '/add', icon: '➕', label: 'Add Transaction' },
  { to: '/transactions', icon: '📋', label: 'Transactions' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">💰</div>
        <h2>Fintrack</h2>
        <p>Personal Finance</p>
      </div>
      <nav className="sidebar-nav">
        {links.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>© 2025 Fintrack</p>
      </div>
    </aside>
  );
}
