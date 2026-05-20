// Utility functions
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  return duration;
};

export const getStatusColor = (status) => {
  const colors = {
    planned: 'bg-blue-100 text-blue-800',
    planning: 'bg-yellow-100 text-yellow-800',
    ongoing: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getStatusBadgeClass = (status) => {
  const classes = {
    planned: 'bg-blue-600 text-white',
    planning: 'bg-yellow-500 text-white',
    ongoing: 'bg-green-600 text-white',
    completed: 'bg-gray-600 text-white',
  };
  return classes[status] || 'bg-gray-600 text-white';
};
