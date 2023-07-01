import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Content, Container } from 'rsuite';
import '../styles/Header.css';

const Header = ({currentUser, logout}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <Navbar id="nav">
        <Nav className="left">
          <img src="/images/logo.jpeg" alt="Logo" className="logo" />
          {currentUser && (
            <Nav.Item href="/home" style={{ color: "#992509", textDecoration:'none' }}>
              Home
            </Nav.Item>
          )}
          {!currentUser && (
            <Nav.Item href="/" style={{ color: "#992509", textDecoration:'none' }}>
              Home
            </Nav.Item>
          )}
          <Nav.Item href="/aboutus" style={{ color: "#992509", textDecoration:'none' }}>
            About Us
          </Nav.Item>
          <Nav.Item href="/contact" style={{ color: "#992509", textDecoration:'none' }}>
            Contact
          </Nav.Item>
        </Nav>
        <Nav className="right">
          {currentUser && (
            <>
              <Nav.Item onClick={handleClick}>
                <input type="button" value="Log Out" />
              </Nav.Item>
            </>
          )}
          {!currentUser && (
            <>
              <Nav.Item href="/login" style={{ color: "#992509", textDecoration:'none' }}>
                Log In
              </Nav.Item>
              <Nav.Item href="/signup" style={{ color: "#992509", textDecoration:'none' }}>
                Sign Up
              </Nav.Item>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;