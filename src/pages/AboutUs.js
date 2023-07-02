import React, { useState, useEffect } from "react";
import Aubrey from "../assets/aubrey.jpg";
import Halie from "../assets/halie.png";
import Kyle from "../assets/kyle.png";
import Will from "../assets/will.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import "../styles/AboutUs.css";
import "animate.css";

const AboutUs = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="bio">
      <div className="Normal">
        <div className="one "
        >
          <div className='shadow3'>
            <img
              src={Kyle}
              className="about-img"
              style={{ marginLeft: "9vw" }}
            /> </div>
          <h3 className="name">Kyle</h3>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: '#992509', fontSize: '60px' }} />
          </a>
          <a href="" target="www.github.com" rel="noopener noreferrer">
            <FaGithub style={{ color: '#992509', fontSize: '60px' }} />
          </a>
          <p className="parag" style={{ marginRight: "9vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="two " >
          <div className='shadow3'>

            <img src={Aubrey} className="about-img" style={{ marginRight: "9vw" }} /> </div>
          <h3 className="name">Aubrey</h3>
          <a
            href="https://www.linkedin.com/in/aubrey-diehl/"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaLinkedin style={{ color: '#992509', fontSize: '60px' }} />


          </a>
          <a
            href="https://github.com/Aubzzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ color: '#992509', fontSize: '60px' }} />

          </a>
          <p className="parag" style={{ marginLeft: "9vw" }}>
            Aubrey is a navy reservist and outdoor enthusiast who is currently
            residing in San Diego, CA with her partner and two kitties. With a
            love for people and cool places, she hopes to combine her passion
            for outdoor education/recreation with her newly found career in Full
            Stack Web Development.
          </p>
        </div>
      </div>
      <div className="reverse"></div>
      <div className="three ">
        <div className='shadow3'>

          <img src={Will} className="about-img" style={{ marginLeft: "9vw" }} />
        </div>
        <h3 className="name">Will</h3>
        <a
          href="https://www.linkedin.com/in/wabowen89/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ color: '#992509', fontSize: '60px' }} />
        </a>
        <a
          href="https://github.com/wabowen89"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ color: '#992509', fontSize: '60px' }} />

        </a>
        <p className="parag" style={{ marginRight: "9vw" }}>
          Will is a 12-year veteran of the US Navy and avid coder who lives in
          San Diego, CA. His passion for problem solving has led him to his
          career in Full Stack Web Development. His also loves to work with his
          3D printer and playing his guitar.
        </p>
      </div>
      <div className="four" >
        <div className='shadow3'>

          <img src={Halie} className="about-img" style={{ marginRight: "9vw" }} />
        </div>
        <h3 className="name">Halie</h3>
        <a
          href="https://linkedin.com/in/halie-romasco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ color: '#992509', fontSize: '60px' }} />
        </a>
        <a
          href="https://github.com/haliespaige"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ color: '#992509', fontSize: '60px' }} />

        </a>
        <p className="parag" style={{ marginLeft: "9vw" }}>
          Halie's transition from sales to software development has provided her
          with a unique perspective. She posses strong communication skills, a
          client-focused mindset, and a deep understanding of business
          requirements. She enjoys being a wife and mom (most of the time) and
          spends her free time outdoors in sunny San Diego!
        </p>
      </div>
      <div className="product" style={{ marginBottom: '600px' }}>
        <h1 className="pdc-tit">Our Product</h1>
        <p className="pdct" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {showBackToTop && (
        <button className="back-to-top" onClick={handleBackToTop} >
          Back to Top
        </button>
      )}
    </div>
  );
};
export default AboutUs;
