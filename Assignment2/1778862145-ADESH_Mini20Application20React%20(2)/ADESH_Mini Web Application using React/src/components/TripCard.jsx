import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, calculateDuration, getStatusBadgeClass } from '../utils/helpers';

export const TripCard = ({ trip }) => {
  const duration = calculateDuration(trip.startDate, trip.endDate);

  return (
    <Link to={`/trip/${trip.id}`}>
      <div className="card p-0 overflow-hidden h-full hover:scale-105 cursor-pointer">
        <div className="h-48 overflow-hidden bg-gray-300">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800 flex-1">{trip.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass(trip.status)}`}>
              {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-1">📍 {trip.destination}</p>
          <p className="text-gray-500 text-xs mb-3">
            {formatDate(trip.startDate)} - {formatDate(trip.endDate)} • {duration} days
          </p>
          
          <p className="text-gray-700 text-sm mb-4 line-clamp-2">{trip.description}</p>
          
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-sm font-semibold text-blue-600">💰 ${trip.budget}</span>
            <span className="text-xs text-gray-500">
              {trip.itinerary?.length || 0} tasks
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
