import React, { useState } from 'react';
import { Panel, PanelGroup } from 'rsuite';
import { Link } from 'react-router-dom';
import mockTasks from '../mockTasks';
import '../styles/IndexPage.css';

const IndexPage = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCardExpansion = (cardId) => {
    if (expandedCards.includes(cardId)) {
      setExpandedCards(expandedCards.filter((id) => id !== cardId));
    } else {
      setExpandedCards([...expandedCards, cardId]);
    }
  };
  
  const renderTaskCards = () => {
    return mockTasks.map((task) => {
      const isExpanded = expandedCards.includes(task.id);
      const cardContentClassName = isExpanded ? 'card-content expanded' : 'card-content';

      return (
        <div key={task.id}>
          <Panel header={task.item} className="tsk-crd">
            <div className={cardContentClassName}>
              <p>{`Area: ${task.area}`}</p>
              <p>{`Task Name: ${task.task_name}`}</p>
              <p>{`Task Description: ${task.task_descr}`}</p>
              <p>{`Frequency: ${task.frequency}`}</p>
              <p>{`Due Date: ${task.due_date}`}</p>
            </div>
            <div className="card-links">
              {task.task_descr.length > 100 && (
                <button className="expand-button" onClick={() => toggleCardExpansion(task.id)}>
                  {isExpanded ? 'See less' : 'See more'}
                </button>
              )}
              <div className="card-links">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
              </div>
            </div>
          </Panel>
        </div>
      );
    });
  };

  return (
    <div id="dex">
      <div className="index-page">
        <h1>Your Tasks</h1>
        <div className="tsk-grid">
          {renderTaskCards()}
          <Link to="/new">
            <Panel className="tsk-crd card-add">
              <div className="card-add">
                <button className="add-button">Add Task</button>
              </div>
            </Panel>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
