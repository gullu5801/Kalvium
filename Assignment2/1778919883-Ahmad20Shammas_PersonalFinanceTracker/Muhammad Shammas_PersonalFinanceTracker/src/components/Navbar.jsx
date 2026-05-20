import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">₹</span>
        <span className="navbar-title">FinTrack</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Dashboard</Link>
        <Link to="/transactions" className={pathname === '/transactions' ? 'active' : ''}>Transactions</Link>
        <Link to="/add" className="nav-cta">+ Add</Link>
      </div>
    </nav>
  )
}

export default Navbar
