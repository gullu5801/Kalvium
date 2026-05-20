import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Moon, Sun, Wallet, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <NavLink to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="stat-icon" style={{ 
            background: 'var(--primary)', 
            color: 'white', 
            margin: 0, 
            width: 32, 
            height: 32, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px -2px var(--primary-shadow)'
          }}>
            <Wallet size={18} strokeWidth={2.5} />
          </div>
          <span className="gradient-text" style={{ fontSize: '1.25rem', lineHeight: 1, display: 'flex', alignItems: 'center' }}>FinancePro</span>
        </NavLink>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <PlusCircle size={18} />
            <span>Add Transaction</span>
          </NavLink>
          
          <div style={{ width: '1px', height: '24px', background: 'var(--border)', margin: '0 8px' }}></div>

          <button onClick={toggleTheme} className="theme-toggle" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            {isDarkMode ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle" style={{ marginRight: '10px' }}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={toggleMenu} className="menu-toggle">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu glass"
          >
            <div className="container mobile-nav-links">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/add" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <PlusCircle size={20} />
                <span>Add Transaction</span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
