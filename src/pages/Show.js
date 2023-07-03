import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Panel, Button } from 'rsuite';
import '../styles/Show.css';
import mockTasks from '../mockTasks'; //delete this after styling is done, also change mockTasks to tasks on line 11

const Show = ({ tasks, currentUser }) => {
  
  const { id } = useParams();

  const task = tasks?.find((item) => item.id === +id);

  return (
    <div id="page">
      <div className='shadow'>
      {task ? (
        <div className="practice-container">
          <Panel
            shaded
            bordered
            bodyFill
            style={{ width: "240px" }}
            className="panel-component"
          >
            <img src={task.picture} alt={task.name} className="img" />
            <Panel className="content-panel">
              <div className="trying">
              <p className="task-header">Task: {task.task_name}</p>
              <p className="task-area">Area: {task.area}</p>
              <p className="task-item">Item: {task.item}</p>
              </div>
              <p className="description">{task.task_descr}</p>
              <div className="button-container">
                <Link to="/indexpage">
                  <Button className="return-button">Return</Button>
                </Link>
              </div>
            </Panel>
          </Panel>
        </div>
      ) : (
        <p>No task found</p>
      )}
      </div>
    </div>
  );
};

export default Show;