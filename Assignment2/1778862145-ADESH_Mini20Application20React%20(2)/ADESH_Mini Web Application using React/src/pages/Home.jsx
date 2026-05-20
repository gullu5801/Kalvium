import React, { useState, useEffect } from 'react';
import { mockTrips } from '../utils/mockData';
import { TripCard } from '../components/TripCard';

export const Home = () => {
  const [trips, setTrips] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    // Load trips from localStorage or use mock data
    const savedTrips = localStorage.getItem('trips');
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    } else {
      setTrips(mockTrips);
      localStorage.setItem('trips', JSON.stringify(mockTrips));
    }
  }, []);

  const filteredTrips = filterStatus === 'all' 
    ? trips 
    : trips.filter(trip => trip.status === filterStatus);

  const statuses = ['all', 'planning', 'planned', 'ongoing', 'completed'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Your Adventures Await</h1>
          <p className="text-gray-600 text-lg">Plan, organize, and track all your trips in one place</p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                filterStatus === status
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {status === 'all' ? 'All Trips' : status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Trips Grid */}
        {filteredTrips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map(trip => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🗺️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No trips found</h2>
            <p className="text-gray-600 mb-6">Start planning your next adventure!</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{trips.length}</div>
            <div className="text-gray-600 mt-2">Total Trips</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600">
              ${trips.reduce((sum, trip) => sum + (trip.budget || 0), 0)}
            </div>
            <div className="text-gray-600 mt-2">Total Budget</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">
              {trips.reduce((sum, trip) => sum + (trip.itinerary?.length || 0), 0)}
            </div>
            <div className="text-gray-600 mt-2">Total Tasks</div>
          </div>
        </div>
      </div>
    </div>
  );
};
