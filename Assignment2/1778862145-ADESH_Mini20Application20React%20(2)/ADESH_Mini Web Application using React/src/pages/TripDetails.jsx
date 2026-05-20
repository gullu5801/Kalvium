import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ItineraryItem } from '../components/ItineraryItem';
import { formatDate, calculateDuration, getStatusBadgeClass } from '../utils/helpers';

export const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskDay, setNewTaskDay] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem('trips') || '[]');
    const foundTrip = trips.find(t => t.id === parseInt(id));
    if (foundTrip) {
      setTrip(foundTrip);
    }
    setLoading(false);
  }, [id]);

  const handleAddTask = () => {
    if (!newTask.trim() || !newTaskDesc.trim()) {
      alert('Please enter both task name and description');
      return;
    }

    const updatedTrip = {
      ...trip,
      itinerary: [
        ...trip.itinerary,
        {
          id: Math.max(...trip.itinerary.map(t => t.id), 0) + 1,
          title: newTask,
          description: newTaskDesc,
          day: parseInt(newTaskDay),
          completed: false,
        }
      ]
    };

    setTrip(updatedTrip);
    saveTrip(updatedTrip);
    setNewTask('');
    setNewTaskDesc('');
    setNewTaskDay(1);
  };

  const handleToggleTask = (taskId) => {
    const updatedTrip = {
      ...trip,
      itinerary: trip.itinerary.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    };
    setTrip(updatedTrip);
    saveTrip(updatedTrip);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTrip = {
      ...trip,
      itinerary: trip.itinerary.filter(task => task.id !== taskId)
    };
    setTrip(updatedTrip);
    saveTrip(updatedTrip);
  };

  const handleDeleteTrip = () => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      const trips = JSON.parse(localStorage.getItem('trips') || '[]');
      const updatedTrips = trips.filter(t => t.id !== trip.id);
      localStorage.setItem('trips', JSON.stringify(updatedTrips));
      navigate('/');
    }
  };

  const saveTrip = (updatedTrip) => {
    const trips = JSON.parse(localStorage.getItem('trips') || '[]');
    const updatedTrips = trips.map(t => t.id === updatedTrip.id ? updatedTrip : t);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!trip) return (
    <div className="text-center py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Trip not found</h1>
      <button 
        onClick={() => navigate('/')}
        className="btn btn-primary"
      >
        Back to Home
      </button>
    </div>
  );

  const duration = calculateDuration(trip.startDate, trip.endDate);
  const completedTasks = trip.itinerary.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Trip Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 mb-4 font-medium"
          >
            ← Back to Trips
          </button>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden bg-gray-300">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">{trip.title}</h1>
                  <p className="text-xl text-gray-600">📍 {trip.destination}</p>
                </div>
                <span className={`px-4 py-2 rounded-lg font-semibold ${getStatusBadgeClass(trip.status)}`}>
                  {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                </span>
              </div>

              <p className="text-gray-700 text-lg mb-6">{trip.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="text-2xl font-bold text-blue-600">{duration} days</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Budget</div>
                  <div className="text-2xl font-bold text-green-600">${trip.budget}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Date Range</div>
                  <div className="text-sm font-bold text-purple-600">
                    {formatDate(trip.startDate)} to {formatDate(trip.endDate)}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleDeleteTrip}
                  className="btn btn-danger"
                >
                  Delete Trip
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Itinerary & Tasks</h2>
            <span className="text-gray-600">
              {completedTasks} of {trip.itinerary.length} completed
            </span>
          </div>

          {trip.itinerary.length > 0 && (
            <div className="mb-8 bg-gray-50 p-2 rounded-lg">
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${trip.itinerary.length > 0 ? (completedTasks / trip.itinerary.length) * 100 : 0}%` }}
                />
              </div>
            </div>
          )}

          {/* Add New Task */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Add Task</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Task name (e.g., Visit Museum)"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Task description"
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <select
                value={newTaskDay}
                onChange={(e) => setNewTaskDay(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Array.from({ length: duration }, (_, i) => i + 1).map(day => (
                  <option key={day} value={day}>Day {day}</option>
                ))}
              </select>
              <button
                onClick={handleAddTask}
                className="w-full btn btn-primary"
              >
                Add Task
              </button>
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            {trip.itinerary.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p className="text-lg">No tasks yet. Add your first task above!</p>
              </div>
            ) : (
              trip.itinerary
                .sort((a, b) => a.day - b.day)
                .map(task => (
                  <ItineraryItem
                    key={task.id}
                    task={task}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
