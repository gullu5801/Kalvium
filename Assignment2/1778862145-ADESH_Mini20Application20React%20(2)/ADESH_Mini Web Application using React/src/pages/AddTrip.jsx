import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TripForm } from '../components/TripForm';

export const AddTrip = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const trips = JSON.parse(localStorage.getItem('trips') || '[]');
    
    const newTrip = {
      id: Math.max(...trips.map(t => t.id), 0) + 1,
      ...formData,
      image: formData.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      budget: parseFloat(formData.budget),
      itinerary: [],
    };

    trips.push(newTrip);
    localStorage.setItem('trips', JSON.stringify(trips));
    
    // Navigate to trip details
    navigate(`/trip/${newTrip.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <TripForm onSubmit={handleSubmit} submitButtonText="Create Trip" />
      </div>
    </div>
  );
};
