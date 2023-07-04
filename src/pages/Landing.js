import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
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
    <>
      <div className="home-container ">
        <div className="home-title">
          <h1>Honey Home</h1>
        </div>
        <div className="home-sub flicker">
          <h2>Tracker</h2>
        </div>
        <div>
          <img
            src="../images/bee3.png"
            style={{
              height: "450px",
              width: "800px",
              marginRight: "450px",
              marginTop: "-30px",
            }}
            alt="bee3.png"
          />
        </div>
        <div className="open-statement">
          <h3>
            Manage your home products with ease and never miss a maintenance
            task again!
          </h3>
        </div>
        <div className="panels">
          <div className="panel">
            <img
              src="../images/secure.png"
              className="panel1-img"
              alt="secure.png"
            />
            <h3 style={{ fontSize: "30px" }}>Secure Manager!</h3>
            <p style={{ fontSize: "18px" }}>
              Log in securely and track your essential tasks for efficient
              completion.
            </p>
          </div>
          <div className="panel">
            <img
              src="../images/chat.png"
              className="panel1-img"
              alt="chat.png"
            />
            <h3 style={{ fontSize: "30px" }}>Get help today!</h3>
            <p style={{ fontSize: "18px" }}>
              Receive assistance from a built in opertor, ready to help handle
              any task.
            </p>
          </div>
          <div className="panel">
            <img
              src="../images/happy.png"
              className="panel1-img"
              alt="panel1-img"
            />
            <h3 style={{ fontSize: "30px" }}>Live Freely!</h3>
            <p style={{ fontSize: "18px" }}>
              Become a task master and give yourself more time to enjoy what
              matters to you.
            </p>
          </div>
        </div>
        <div className="closing-statement">
          <h3>
            Ready to become a home maintenance master? Maximize your home’s
            value and organization today!
          </h3>
        </div>
        <div className="closing-image">
          <img
            src="../images/bee1.png"
            style={{
              height: "450px",
              width: "600px",
              marginLeft: "950px",
              marginTop: " -410px",
            }}
            alt="bee1"
          />
        </div>
        <div className="signup-button">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        {showBackToTop && (
          <button className="back-to-top" onClick={handleBackToTop}>
            Back to Top
          </button>
        )}
      </div>
      
    </>
  );
};

export default Landing;
