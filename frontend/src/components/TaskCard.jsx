import React from 'react';
import { Trash2, Edit2, CheckCircle2, Circle } from 'lucide-react';

const TaskCard = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="task-card bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3 flex-1">
          {task.isCompleted ? (
            <CheckCircle2 className="text-green-500 flex-shrink-0" />
          ) : (
            <Circle className="text-gray-300 flex-shrink-0" />
          )}
          <div>
            <h3 className={`font-semibold text-lg ${
              task.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'
            }`}>
              {task.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{task.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          getPriorityColor(task.priority)
        }`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        {task.category && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {task.category}
          </span>
        )}
      </div>

      {task.dueDate && (
        <p className="text-sm text-gray-500 mb-4">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 py-2 rounded transition">
          <Edit2 size={16} />
          <span>Edit</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 bg-red-100 text-red-600 hover:bg-red-200 py-2 rounded transition">
          <Trash2 size={16} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
