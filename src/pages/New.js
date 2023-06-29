import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Message, Dropdown, Label} from 'rsuite';
// import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import mockTasks from '../mockTasks';

import '../styles/New.css';

const New = ({ createTask, currentUser }) => {

  const [newTask, setNewTask] = useState({
    area: "",
    item: "",
    picture: "",
    task_name: "",
    task_descr: "",
    frequency: "",
    due_date: "",
    user_id: ""
  });

  const handleChange = (value, name) => {
    setNewTask({ ...newTask, [name]: value});
  };
  
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(newTask)
    navigate('/indexpage')
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

  return (
    <div id="form">
      <Form className="formstyle">
        <Form.Group>
          <Form.ControlLabel for="area">Area</Form.ControlLabel>
          <Input
            id="area"
            name="area"
            placeholder="Where is your task located?"
            type="text"
            onChange={(value) => handleChange(value, "area")}
            value={newTask.area}
            style={{ width: "18em" }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Item</Form.ControlLabel>
          <Input
            id="item"
            name="item"
            placeholder="What item is your task associated with?"
            type="text"
            onChange={(value) => handleChange(value, "item")}
            value={newTask.item}
            style={{ width: "18em" }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Picture</Form.ControlLabel>
          <Input
            id="picture"
            name="picture"
            placeholder="Provide a picture of the item you'll be working on"
            type="text"
            onChange={(value) => handleChange(value, "picture")}
            value={newTask.picture}
            style={{ width: "18em" }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Task</Form.ControlLabel>
          <Input
            id="task_name"
            name="task_name"
            placeholder="What is the name of your task?"
            type="text"
            onChange={(value) => handleChange(value, "task_name")}
            value={newTask.task_name}
            style={{ width: "18em" }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Due Date</Form.ControlLabel>
          <Input
            id="due_date"
            name="due_date"
            placeholder="When is your task due?"
            type="text"
            onChange={(value) => handleChange(value, "due_date")}
            value={newTask.due_date}
            style={{ width: "18em" }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Frequency</Form.ControlLabel>
          <Dropdown
            id="frequency"
            name="frequency"
            placeholder="How often do you need to complete it?"
            type="text"
            title={newTask.frequency ? newTask.frequency : "Select frequency"}
            onSelect={(value) => handleChange(value, "frequency")}
            className="custom-dropdown"
          >
            <CustomDropdownItem eventKey="Daily">Daily</CustomDropdownItem>
            <CustomDropdownItem eventKey="Weekly">Weekly</CustomDropdownItem>
            <CustomDropdownItem eventKey="Monthly">Monthly</CustomDropdownItem>
            <CustomDropdownItem eventKey="Annually">
              Annually
            </CustomDropdownItem>
          </Dropdown>
          value={newTask.due_date}
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Input
            id="task_descr"
            name="task_descr"
            placeholder="Provide a description of the task?"
            type="text"
            onChange={(value) => handleChange(value, "task_descr")}
            value={newTask.task_descr}
            style={{ width: "18em", height: "6em" }}
          />
        </Form.Group>

        <Form.Group>
          <Form.ControlLabel for="user_id" hidden>User Id</Form.ControlLabel>
          <Input
            id="user_id"
            name="user_id"
            onChange={handleChange}
            value={(newTask.user_id = currentUser?.id)}
            type="hidden"
          />
        </Form.Group>

        <div className="btnPos">
          <Button onClick={handleSubmit}>Submit Task</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </Form>
      {error && (
        <Message
          color="info"
          className="text-center mx-auto my-2"
          style={{ width: "50vw" }}
        >
          Error! <br />
          Please make sure you are logged in and fill out all required fields
        </Message>
      )}
    </div>
  );
};

export default New;
