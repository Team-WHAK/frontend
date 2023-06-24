import React from 'react';
import { Panel, Button } from 'rsuite';
import { useParams, Link, NavLink } from 'react-router-dom';
import mockTasks from '../mockTasks';
import '../styles/Show.css';

const { Paragraph, Header, Title, Body } = Panel;

const Show = ({ tasks, deleteTask, logged_in, currentUser }) => {
  const { id } = useParams();
  let currentTask = tasks?.find((task) => task.id === +id);

  const handleDelete = () => {
    deleteTask(currentTask.id);
  };

  if (!currentTask) {
    return <div>Loading...</div>; // Add loading state or handle the case when currentTask is undefined
  }

  return (
    <Panel className="task-card">
      <Header>
        <Title>{currentTask.area}</Title>
        <Paragraph className="mb-2 text-muted">{currentTask.item}</Paragraph>
      </Header>
      <Body>
        <Title>{currentTask.task_name}</Title>
        <Paragraph>{currentTask.task_descr}</Paragraph>
        <Paragraph>Frequency: {currentTask.frequency}</Paragraph>
        <Paragraph>Due Date: {currentTask.due_date}</Paragraph>
        {logged_in && currentUser.id === currentTask.user_id && (
          <>
            <Link to={`/show/${currentTask.id}`}>Add to Favorites</Link>
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
