import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          💰 Finance Tracker
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/add" className="nav-link">
              Add Transaction
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
