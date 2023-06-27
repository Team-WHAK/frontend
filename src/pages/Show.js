import React from 'react';
import { Panel, Button } from 'rsuite';
import { useParams, Link, NavLink } from 'react-router-dom';
import mockTasks from '../mockTasks';


const { Paragraph, Header, Title, Body } = Panel;

const Show = ({ tasks, deleteTask, logged_in, currentUser }) => {
  const { id } = useParams()
  const task = mockTasks.find((item) => item.id === +id);
  let currentTask = tasks?.find((task) => task.id === +id);

  const handleDelete = () => {
    deleteTask(currentTask.id);
  };

  if (!currentTask) {
    return <div>Loading...</div>
  }

  return (
    <Panel className="task-card">
      <Header>
        <Title>{currentTask.area}</Title>
        <Paragraph className="mb-2 text-muted">{currentTask.item}</Paragraph>
      </Header>
      <Body>
        <Title>{currentTask.task_name}</Title>
        <img src= {task.img} alt = {task.name} height="240" />
        <Paragraph>{currentTask.task_descr}</Paragraph>
        <Paragraph>Frequency: {currentTask.frequency}</Paragraph>
        <Paragraph>Due Date: {currentTask.due_date}</Paragraph>
        {logged_in && currentUser.id === currentTask.user_id && (
          <>
            <Button className="show-buttons">
              <NavLink to={`/edit/${id}`} className="show-link">
                Edit Task
              </NavLink>
            </Button>
          </>
        )}
        <Button onClick={handleDelete}>
          <NavLink to="/indexpage">Delete Task</NavLink>
        </Button>
      </Body>
    </Panel>
  );
};

export default Show;
