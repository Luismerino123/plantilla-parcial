import React from 'react';
import './Task.css'; 
import CheckComplete from '../completed/CheckComplete'; 

const Task = ({ task, deleteTaskById, onCompletedTask }) => {

  const handleDeleteTask = () => {
    deleteTaskById(task.id);
  };

  return (
    <div className="task-item">
      <CheckComplete 
        taskTitle={task.title} 
        isCompleted={task.completed} 
        onComplete={() => onCompletedTask(task.id)} 
      />

      <button className="delete-btn" onClick={handleDeleteTask}>
        Eliminar
      </button>
    </div>
  );
};

export default Task;
