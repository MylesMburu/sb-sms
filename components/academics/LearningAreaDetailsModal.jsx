import React from 'react';
import LearningAreaDetails from '@/components/academics/LearningAreaDetails'; // Import the LearningAreaDetails component

const LearningAreaDetailsModal = ({ learningArea, onClose, onEdit, onDelete }) => {
  if (!learningArea) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="modal-content bg-white p-5 rounded-lg shadow-lg relative">
        <span className="close absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={onClose}>&times;</span>
        {/* Use the LearningAreaDetails component here */}
        <LearningAreaDetails learningArea={learningArea} />
        <div className="mt-4 flex justify-end space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => onEdit(learningArea)}>Edit</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => onDelete(learningArea.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default LearningAreaDetailsModal;
