import React from "react";
import { Navbar, Nav, Container, Content, } from "rsuite"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <Container>
        <Content>
          <div id='conc'>
            <img src="/images/person.jpeg" alt='person' className='person' />
            <div className='soc'>
              <ul style={{ display: 'flex', justifyContent: 'center', gap: '3vw', listStyleType: 'none' }}>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter style={{ color: 'black', fontSize: '24px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook style={{ color: 'black', fontSize: '24px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'black', fontSize: '24px' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Navbar id='footer'>

            <Nav className='TM'>
              <Nav.Item> © Whak inc. 2023. All rights reserved. </Nav.Item>
            </Nav>

          </Navbar>
        </Content>
      </Container>
    </>
  )
}

export default Footer;
