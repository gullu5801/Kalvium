import React from 'react';

export const ItineraryItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      task.completed 
        ? 'bg-gray-50 border-gray-200' 
        : 'bg-white border-blue-200 hover:border-blue-400'
    }`}>
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mt-1 w-5 h-5 cursor-pointer"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
              Day {task.day}
            </span>
            <h4 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task.title}
            </h4>
          </div>
          <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
            {task.description}
          </p>
        </div>
        {task.completed && (
          <div className="text-green-600 text-2xl flex-shrink-0">✓</div>
        )}
      </div>
      {onDelete && (
        <button
          onClick={() => onDelete(task.id)}
          className="mt-3 text-red-600 hover:text-red-800 text-sm font-medium transition"
        >
          Delete
        </button>
      )}
    </div>
  );
};
