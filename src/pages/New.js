import React, { useState } from "react";
import { Form, Input, Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import '../styles/New.css';



const New = ({ createTask, currentUser }) => {
  const [newTask, setNewTask] = useState({
    Area: "",
    Item: "",
    Image: "",
    Task: "",
    Description: "",
    Frequency: "",
    Due_date: "",
    user_id: currentUser?.id
  });

  const navigate = useNavigate();

  const handleChange = (value, name) => {
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = () => {
    createTask(newTask);
    navigate("/index");
  };

  const handleCancel = () => {
    navigate("/index");
  }

  return (
    <div id='form'>
      <Form className="formstyle">
        <Form.Group>
          <Form.ControlLabel>Area</Form.ControlLabel>
          <Input
            name="Area"
            onChange={value => handleChange(value, 'Area')}
            value={newTask.Area}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Item</Form.ControlLabel>
          <Input
            name="Item"
            onChange={value => handleChange(value, 'Item')}
            value={newTask.Item}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Image</Form.ControlLabel>
          <Input
            name="Image"
            onChange={value => handleChange(value, 'Image')}
            value={newTask.Image}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Task</Form.ControlLabel>
          <Input
            name="Task"
            onChange={value => handleChange(value, 'Task')}
            value={newTask.Task}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Input
            name="Description"
            onChange={value => handleChange(value, 'Description')}
            value={newTask.Description}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Frequency</Form.ControlLabel>
          <Input
            name="Frequency"
            onChange={value => handleChange(value, 'Frequency')}
            value={newTask.Frequency}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Due Date</Form.ControlLabel>
          <Input
            name="Due date"
            onChange={value => handleChange(value, 'Due date')}
            value={newTask["Due date"]}
          />
        </Form.Group>
<div className='btnPos'>
        <Button onClick={handleSubmit}>
          Submit New Task
        </Button>
        <Button onClick={handleCancel}>
          Cancel
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default New;
