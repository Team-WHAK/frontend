import React from 'react';
import { Navbar, Nav, Content, Container } from 'rsuite';
import '../styles/Header.css';

const Header = ({currentUser}) => {


  return (
    <>
      <Navbar id="nav">
        <Nav className="left">
          <img src="/images/logo.jpeg" alt="Logo" className="logo" />
          {currentUser && (
            <Nav.Item href="/home" style={{ color: "#ffffff" }}>
              Home
            </Nav.Item>
          )}
          {!currentUser && (
            <Nav.Item href="/" style={{ color: "#ffffff" }}>
              Home
            </Nav.Item>
          )}
          <Nav.Item href="/aboutus" style={{ color: "#ffffff" }}>
            About Us
          </Nav.Item>
          <Nav.Item href="/contact" style={{ color: "#ffffff" }}>
            Contact
          </Nav.Item>
        </Nav>
        <Nav className="right">
          {currentUser && (
            <>
              <Nav.Item>
                <input type="button" value="Log Out" />
              </Nav.Item>
            </>
          )}
          {!currentUser && (
            <>
              <Nav.Item href="/login" style={{ color: "#ffffff" }}>
                Log In
              </Nav.Item>
              <Nav.Item href="/signup" style={{ color: "#ffffff" }}>
                Sign Up
              </Nav.Item>
            </>
          )}
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
  );
};

export default Header;