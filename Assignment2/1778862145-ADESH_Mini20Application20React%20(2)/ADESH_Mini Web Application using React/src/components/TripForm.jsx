import React, { useState } from 'react';

export const TripForm = ({ onSubmit, initialData = null, submitButtonText = 'Create Trip' }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      destination: '',
      startDate: '',
      endDate: '',
      description: '',
      image: '',
      budget: '',
      status: 'planning',
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Trip title is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.budget || formData.budget <= 0) newErrors.budget = 'Budget must be greater than 0';
    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const renderInput = (name, label, type = 'text', required = true) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          errors[name] ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{submitButtonText === 'Create Trip' ? 'Plan Your Trip' : 'Edit Trip'}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput('title', 'Trip Title')}
        {renderInput('destination', 'Destination')}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput('startDate', 'Start Date', 'date')}
        {renderInput('endDate', 'End Date', 'date')}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput('budget', 'Budget ($)', 'number')}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="planning">Planning</option>
            <option value="planned">Planned</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Describe your trip and what you want to do..."
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {renderInput('image', 'Image URL (optional)', 'url', false)}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-6"
      >
        {submitButtonText}
      </button>
    </form>
  );
};
