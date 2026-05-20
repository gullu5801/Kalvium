import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AddTrip } from './pages/AddTrip';
import { TripDetails } from './pages/TripDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-trip" element={<AddTrip />} />
          <Route path="/trip/:id" element={<TripDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
