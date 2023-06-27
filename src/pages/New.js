import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Message, Dropdown, } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import mockTasks from '../mockTasks';

import '../styles/New.css';

const New = ({ createTask, currentUser }) => {
  const [newTask, setNewTask] = useState({
    area: "",
    item: "",
    image: "",
    task: "",
    description: "",
    frequency: "",
    due_date: "",
    user_id: currentUser?.id
  });

  const [tasks, setTasks] = useState(mockTasks);

  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleChange = (value, name) => {
    setNewTask({ ...newTask, [name]: value });
    console.log(name, value); 
  };

  const handleSubmit = () => {
    if (
      newTask.area !== "" &&
      newTask.item !== "" &&
      newTask.image !== "" &&
      newTask.task !== "" &&
      newTask.description !== "" &&
      newTask.frequency !== "" &&
      newTask.due_date !== ""
    ) {
      const updatedTasks = [...tasks, newTask]; // Add the new task to the existing tasks
      setTasks(updatedTasks); // Update the tasks state with the updated tasks array
      navigate("/index");
    } else {
      setError(true);
      Message.error("Please fill out all required fields.");
    }
  };

  const handleCancel = () => {
    navigate("/index");
  };

  const CustomDropdownItem = ({ eventKey, children, ...props }) => (
    <Dropdown.Item
      eventKey={eventKey}
      className="custom-dropdown-item"
      {...props}
    >
      {children}
    </Dropdown.Item>
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewTask({ ...newTask, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id='form'>
      <Form className="formstyle">
        <Form.Group>
          <Form.ControlLabel>Area</Form.ControlLabel>
          <Input
            name="area"
            onChange={value => handleChange(value, 'area')}
            value={newTask.area}
            style={{ width: '18em' }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Item</Form.ControlLabel>
          <Input
            name="item"
            onChange={value => handleChange(value, 'item')}
            value={newTask.item}
            style={{ width: '18em' }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Image</Form.ControlLabel>
          <div className="upload-container">
            <label htmlFor="image-upload" className="upload-button">
              Upload Image
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          {newTask.image && (
            <div style={{ maxWidth: '200px' }}>
              <img
                src={newTask.image}
                alt="Uploaded"
                style={{
                  width: '100%',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                  borderRadius: '4px',
                }}
              />
            </div>
          )}
        </Form.Group>


        <Form.Group>
          <Form.ControlLabel>Task</Form.ControlLabel>
          <Input
            name="task"
            onChange={value => handleChange(value, 'task')}
            value={newTask.task}
            style={{ width: '18em' }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Due Date</Form.ControlLabel>
          <DatePicker
            name="due_date"
            onChange={value => handleChange(value, 'due_date')}
            value={newTask.due_date ? new Date(newTask.due_date) : null}
            style={{ width: '18em' }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Frequency</Form.ControlLabel>
          <Dropdown
            name="frequency"
            title={newTask.frequency ? newTask.frequency : "Select frequency"}
            onSelect={value => handleChange(value, 'frequency')}
            className="custom-dropdown"
          >
            <CustomDropdownItem eventKey="Daily">Daily</CustomDropdownItem>
            <CustomDropdownItem eventKey="Weekly">Weekly</CustomDropdownItem>
            <CustomDropdownItem eventKey="Monthly">Monthly</CustomDropdownItem>
            <CustomDropdownItem eventKey="Annually">Annually</CustomDropdownItem>
          </Dropdown>
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Input
            name="description"
            onChange={value => handleChange(value, 'description')}
            value={newTask.description}
            style={{ width: '18em', height: '6em' }}
          />
        </Form.Group>

        <div className='btnPos'>
          <Button onClick={handleSubmit}>
            Submit Task
          </Button>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
      {error && (
        <Message color="info" className='text-center mx-auto my-2' style={{ width: "50vw" }}>
          Error!  <br />
          Please make sure you are logged in and fill out all required fields
        </Message>
      )}
    </div>
  );
};

export default New;
