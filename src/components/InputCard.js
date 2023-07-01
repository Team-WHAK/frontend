import React from "react";

const InputCard = ({ newTask }) => {
  return (
    <div className="input-card">
      <div className="input-card-image-container">
        {newTask.picture && (
          <img
            className="input-card-image"
            src={newTask.picture}
            alt="Task Image"
          />
        )}
      </div>
      <div className="input-card-content">
        <div className="input-card-row">
          <div className="input-card-field">
            <p>Area: {newTask.area}</p>
          </div>
          <div className="input-card-field">
            <p>Task Name: {newTask.task_name}</p>
          </div>
          <div className="input-card-field">
            <p>Item: {newTask.item}</p>
          </div>
        </div>
        <div className="input-card-row">
          <div className="input-card-field">
            <p>Due Date: {newTask.due_date}</p>
          </div>
          <div className="input-card-field">
            <p>Frequency: {newTask.frequency}</p>
          </div>
          <div className="input-card-field">
            <p>Description: {newTask.task_descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
