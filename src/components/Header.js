import React from 'react';
import { Navbar, Nav, Content, Container } from 'rsuite';
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
        </Content>
      </Container>

    </>
  )
};

export default Header;