import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">✈️</span>
          <h1 className="text-2xl font-bold text-white">Travel Planner</h1>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200 transition font-medium">
            Home
          </Link>
          <Link to="/add-trip" className="text-white hover:text-blue-200 transition font-medium">
            Add Trip
          </Link>
        </div>
      </div>
    </nav>
  );
};
