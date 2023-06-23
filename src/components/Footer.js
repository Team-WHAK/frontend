import React from "react";
import {Navbar, Nav, Container, Content, } from "rsuite"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

import '../styles/Footer.css';

const Footer = () => {
  return(
   <>
    <Container>
        <Content>

 {/* The below is for IceBox */}

        {/* <div id='links'>

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


<div id='conc'>

<img src="/images/person.jpeg" alt='person' className='person'/>
<div className='soc'>
    <ul style={{ display: 'flex', justifyContent: 'center', gap:'3vw', listStyleType: 'none' }}>
            <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: 'black',  fontSize: '24px' }} /> 
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{ color: 'black',  fontSize: '24px' }} /> 
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ color: 'black',  fontSize: '24px' }} /> 
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
