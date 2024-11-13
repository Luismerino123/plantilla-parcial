import React, { useState } from 'react';
import "./CheckComplete.css";

const CheckComplete = ({ taskTitle, isCompleted, onComplete }) => {
  const [completed, setCompleted] = useState(isCompleted);

  const handleCompleteClick = () => {
    setCompleted(!completed);
    onComplete();
  };

  return (
    <>
      <span className={`task-title ${completed ? 'completed' : ''}`}>
        {taskTitle}
      </span>
      <button 
        className={`complete-btn ${completed ? 'completed' : ''}`} 
        onClick={handleCompleteClick}>
        {completed ? 'Completado' : 'Completar'}
      </button>
    </>
  );
};

export default CheckComplete;
