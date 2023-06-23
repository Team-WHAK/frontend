init code:

import React from 'react';


const \name\ = () => {
    return (
        <>
        </>
    )
}

export default \name\;


Init Header:

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



INIT Footer:

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
