import React from 'react';
import { Container, Content, Grid, Row, Col, Panel, } from 'rsuite';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <Container>
      <Content>

        <div id="para">

          <div className="note-position">
            <h1 className="note">
              Manage your home products with ease and never miss a maintenance task again!
            </h1>
          </div>

        </div>

        <br />
        <br />

        <div id="key-features">

          <Grid fluid>
            <Row>
              <Col md={12} lg={6}>
                <Panel className="points">
                  <h1 className="tit">Key Features</h1>

                  <br />
                  <br />
                  <br />

                  <div className="subtit">
                    <h2>
                      Securely log in and manage your inventory, scheduling maintenance tasks and tracking their history
                      for every household item.
                    </h2>

                    <br />
                    <br />

                    <h2>
                      Receive timely notifications and alerts for expiring warranties and pending maintenance tasks
                      ensuring you stay on top of your home maintenance.
                    </h2>

                    <br />
                    <br />

                    <h2>
                      Search and filter through your products and tasks quickly with an intuitive and user-friendly
                      interface that adapts to any device.
                    </h2>

                  </div>

                </Panel>
              </Col>
              <Col md={12} lg={6}>
                <div id="house-pic">
                  <img src="/images/house.jpeg" alt="house" className="house" />
                </div>
              </Col>
            </Row>
          </Grid>

        </div>

        <div id='boxes'>

          <div className='box1'>
            <h2> Join the Team</h2>
            <p>Become a member</p>
            <button className='link-btn'>{' > '}</button>
          </div>

          <br />
          <br />

          <div className='box2'>
            <h2> Stay on Task</h2>
            <p>Become a member</p>
            <button>{' > '}</button>
          </div>

          <br />
          <br />

          <div className='box3'>
            <h2> Responsive experiance</h2>
            <p>Become a member</p>
            <button>{' > '}</button>
          </div>

        </div>


        <div id='message'>

          <div className='ready'>
            <h2>Ready to become a home maintenance master? Maximize your home's value and organization today! </h2>
          </div>

          <div className='btns'>
            <button className='B1'>Sign Up</button>
            <button className='B2'>Demo</button>
          </div>

        </div>


        <div id='fam-img'>
          <img src="/images/family.jpeg" alt='family' className='fam' />
        </div>

      </Content>
    </Container>
  );
};

export default Landing;

//BEFORE SIGNIN