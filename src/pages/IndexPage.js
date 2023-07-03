import React from 'react';
import { Panel, Button, } from 'rsuite';
import { Link } from 'react-router-dom';
import '../styles/IndexPage.css';
import mockTasks from '../mockTasks'; //delete this after styling is done, also chang mockTasks to myTasks on line 20

const IndexPage = ({ tasks, currentUser, deleteTask }) => {

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
  }

  const myTasks = tasks?.filter(task => currentUser?.id === task.user_id)
  const itemsPerSlide = 4;

  const taskGroups = [];
  for(let i = 0; i < myTasks.length; i += itemsPerSlide) {
    taskGroups.push(myTasks.slice(i, i + itemsPerSlide));
  }

  return (
    <div id="index">
      <div className='shadow'>
        <div
          className="index-container animate__animated animate__zoomIn animate__slower	2s">
          <div className='task-grid'>
            {tasks?.map((task) => {
              return (
                <Link key={task.id} to={`/show/${task.id}`}>
                  <Panel className='crd'
                  >
                    <Panel
                      header={task.task_name}
                      className="card-content"
                    >
                      <p className="subTit" >{`${task.area} - ${task.item}`} </p>
                      <div className='index-btns'>
                        <Link to="/indexpage">
                          <Button
                            onClick={() => handleDeleteTask(task.id)}
                            className='btn1'
                          >
                            Delete
                          </Button>
                        </Link>
                        <Link key={task.id} to={`/edit/${task.id}`}>
                          <Button
                            className='btn1 '
                          >Edit</Button>
                        </Link>
                      </div>
                    </Panel>
                  </Panel>
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className="btn-container" >
          <Link to="/new">
            <Button style={{ border: "1px solid #000000" }} className='add animate__animated animate__zoomIn animate__slower	3s'> Add Task</Button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default IndexPage;