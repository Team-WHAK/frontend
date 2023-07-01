## init code:

import React from 'react';


const \name\ = () => {
    return (
        <>
        </>
    )
}

export default \name\;


## Init Header:

import React from 'react';
import { Navbar, Nav } from 'rsuite';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
<Navbar id='nav'>
<Nav className='left'>
<img src="/images/logo.jpeg" alt="Logo" className="logo" />
<Nav.Item href=''>Home</Nav.Item>
<Nav.Item href=''>About Us</Nav.Item>
<Nav.Item href=''>Contact</Nav.Item>
</Nav>
<Nav className='right'>
<Nav.Item href=''>Sign In</Nav.Item>
<Nav.Item href=''>Sign Up</Nav.Item>
</Nav>
</Navbar>
 <Container>
      <Content>
        <div id="landing">

          <div className="title-position">
            <h1 className="title">HoneyHome</h1>
            <h1 className="title2">Tracker</h1>
          </div>

          <div className="pic-position">
            <img src="/images/landing.jpeg" alt="pic" className="pic" />
          </div>

        </div>
    </Container>
 </Content>
 </>
  );
};

export default Header;



## INIT Footer:

import React from 'react';
import { Navbar, Nav } from 'rsuite';

import '../style/Footer.css';



const Footer = () => {
    return (
   <Navbar id='footer'>
   <Nav className='TM'>
    <Nav.Item> © Whak inc. 2023. All rights reserved. </Nav.Item>
    </Nav>
   </Navbar>  
    )
}

export default Footer;


## We are going to Need a Landing Page for when the user is not Signed in 


sections from wire frame: 8 

<div>
2 X <h1>
<img />
</div>

<div>
<h2>
</div>

<div>
<h1></h1>
3 X <h2>
<img />
</div>

<div>
3 X <h3>
3 X <h4>
3 X <button>
</div>

<div>
<h2>
2 X <button>
</div>

<div>
<img />
</div>

<div>
9 X Links
</div>

<div>
<img />
3 X Links
</div>


Icebox Links code:

                <div className='R1'>
                    <ul style={{ display: 'flex', justifyContent: 'center', gap:'30vw', listStyleType: 'none' }}>
                        <li>
                            <a href= '' target='' rel=''>Products</a>
                        </li>
                        <li>
                            <a href= '' target='' rel=''>FAQ</a>
                        </li>
                        <li>
                            <a href= '' target='' rel=''>Legal</a>
                        </li>
                    </ul>
                </div>

                    <div className='R2' >
                        <ul style={{ display: 'flex', justifyContent: 'center', gap:'28vw', listStyleType: 'none' }}>
                            <li>
                                <a href= '' target='' rel=''>Scheduling</a>
                            </li>
                            <li>
                                <a href= '' target='' rel=''>Contact</a>
                            </li>
                            <li>
                                <a href= '' target='' rel=''>Privacy</a>
                            </li>
                        </ul>
                    </div>

                    <div className='R3'>
                        <ul style={{ display: 'flex', justifyContent: 'center', gap:'25vw', listStyleType: 'none' }}>
                            <li>
                                <a href= '' target='' rel=''>Support</a>
                            </li>
                            <li>
                                <a href= '' target='' rel=''>Testimonials</a>
                            </li>
                            <li>
                                <a href= '' target='' rel=''>Terms&Conditions</a>
                            </li>
                        </ul>
                    </div>


            </div> */} 

## NEW
We are going to need a modal

const TaskNew = ({ createTask, currentUser}) => {
  const [newTask, setNewTask] = useState({
    Area: "",
    Item: "",
    Image: "",
    Task: "",
    Description: "",
    Frequency: "",
    Due date: "",
    user_id: currentUser?.id
  });

const navigate = useNavigate();

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createTask(newTask);
    navigate("/taskIndex");
  };

      <>
      <Form className="formstyle">
        <FormGroup>
          <Label for="area">Area</Label>
          <Input
            type="text"
            name="area"
            onChange={handleChange}
            value={newTask.area}
          />
        </FormGroup>

        <FormGroup>
          <Label for="item">Item</Label>
          <Input
            type="text"
            name="item"
            onChange={handleChange}
            value={newTask.item}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            value={newTask.image}
          />
        </FormGroup>

        <FormGroup>
          <Label for="task">Task</Label>
          <Input
            type="text"
            name="task"
            onChange={handleChange}
            value={newTask.task}
          />
        </FormGroup>

        <FormGroup>
          <Label for="task_description">Description</Label>
          <Input
            type="text"
            name="task_description"
            onChange={handleChange}
            value={newTask.task_description}
          />
        </FormGroup>

        <FormGroup>
  <Label for="frequency">Frequency</Label>
  <Input
    type="text"
    name="frequency"
    onChange={handleChange}
    value={newTask.frequency}
  />
</FormGroup>


        <FormGroup>
          <Label for="due_date">Due Date</Label>
          <Input
            type="text"
            name="due_date"
            onChange={handleChange}
            value={newTask.due_date}
          />
        </FormGroup>

       
</FormGroup>
</Form>
<Button color="primary" onClick={handleSubmit} name="submit">
  Submit New Task
</Button>
</>
);
};
=======
            </div> 

## HOME Content
 The panels are clickable and the routes can change to what we need

Note: This is for CurrentUser

import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { Panel, Placeholder, Grid, Row, Col } from 'rsuite';
import '../styles/Home.css';

const Card = ({ title }) => (
  <Panel bordered header={title} className="card">
    <Placeholder.Paragraph />
  </Panel>
);

const Home = ({currentUser}) => {
  return (
    <div id='portal'>
      <h1 className='welcome' style={{ display: 'flex', justifyContent: 'center', gap: '3vw', }}>Welcome {currentUser} </h1>
      <div className="container">
        <a href="/users/tasks">
          <Card title="My Tasks"/>
        </a>
        <a href="/users/calendar">
          <Card title="My Calendar"/>
        </a>
        <a href="/tasks/add">
          <Card title="Add Task"/>
        </a>
        <a href="/live-agent">
          <Card title="Live Agent"/>
        </a>
      </div>
    </div>
  );
};

export default Home;


// AFTER SIGNIN


## Not Found:

Has ...
<div id='container'>
<div className='txt'>
<h1>Honey, you’ve stumbled onto a page that doesn’t exist. But don’t buzz off just yet! Come back to the hive, and join the colony. </h1>
</div>
<div className='returnBtn'>
<button></button>
</div>
<div className='cutePics'>
<img src='https://i.imgur.com/840884.png' alt='bee' />
<img src='https://i.imgur.com/840884.png' alt='bee' />
</div>
</div>



## NEED TO MAKE IT SO THAT THE USER NEEDS TO BE LOGGED IN INORDER TO SEE THE HOME PAGE AND OTHER CONTENT ASSOCIATED.


## The following code is for the picture uploading feature on the new page. As of right now, I cannot get this to work while also storing to the db.

here is the handleUpload code
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewTask({ ...newTask, picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

Here is the form code
        {/* <Form.Group>
          <Form.ControlLabel>Picture</Form.ControlLabel>
          <div className="upload-container">
            <label htmlFor="image-upload" className="upload-button">
              Upload Picture
              <input
                id="picture"
                name="picture"
                placeholder="Provide a picture of the item"
                type="text"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          {newTask.picture && (
            <div style={{ maxWidth: "200px" }}>
              <img
                src={newTask.picture}
                alt="Uploaded"
                style={{
                  width: "100%",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  borderRadius: "4px",
                }}
              />
            </div>
          )}
        </Form.Group> */}

## Modal For New.js if we decide to use it:

import React, { useState, useEffect } from "react";
import { Button, Modal, Input, InputGroup, Form, Dropdown, Message } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import '../styles/New.css';

const New = ({ createTask, currentUser }) => {
  const [open, setOpen] = useState(true);
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

  const handleInputChange = (value, name) => {
    setNewTask({ ...newTask, [name]: value });
  };

  const navigate = useNavigate();

  const [error, setError] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(newTask)
    navigate('/indexpage')
  };

  useEffect(() => {
    setOpen(true); // Set showModal to true when component mounts
  }, []);

  const handleCancel = () => {
    navigate("/indexpage");
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
      <Modal open={open} >
        <Modal.Header>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Area</Form.ControlLabel>
              <InputGroup>
                <Input name="area" value={newTask.area} onChange={value => handleInputChange(value, 'area')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Item</Form.ControlLabel>
              <InputGroup>
                <Input name="item" value={newTask.item} onChange={value => handleInputChange(value, 'item')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Task Name</Form.ControlLabel>
              <InputGroup>
                <Input name="task_name" value={newTask.task_name} onChange={value => handleInputChange(value, 'task_name')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Description</Form.ControlLabel>
              <InputGroup>
                <Input name="task_descr" value={newTask.task_descr} onChange={value => handleInputChange(value, 'task_descr')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Frequency</Form.ControlLabel>
              <InputGroup>
                <Input name="frequency" value={newTask.frequency} onChange={value => handleInputChange(value, 'frequency')} />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Due Date</Form.ControlLabel>
              <InputGroup>
                <Input name="due_date" value={newTask.due_date} onChange={value => handleInputChange(value, 'due_date')} />
              </InputGroup>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="primary" onClick={handleSubmit}>
            Add Task
          </Button>
          <Button appearance="subtle" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {error && (
        <Message
          color="info"
          className="text-center mx-auto my-2"
          style={{ width: "50vw" }}
        >
          Error!
          <br />
          Please make sure you are logged in and fill out all required fields
        </Message>
      )}
    </div>
  );
};

export default New;
