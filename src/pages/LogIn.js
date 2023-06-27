import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockUsers from "../mockUsers";
import '../styles/LogIn.css';

const LogIn = ({ login }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const foundUser = mockUsers.find(user => user.email === data.email);

    if (foundUser && data.password === "password") {
      handleLogin();
    } else {
      console.log("Invalid credentials");
    }

    e.target.reset();
  };

  return (
    <div id="login">
    <div  className="login-container">
      <h1 className="entr">Sign In</h1>
      {!loggedIn ? (
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="submit-btn" />
          </div>
        </form>
      ) : (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <br />
      <div>
        Not registered yet, <a href="/signup">Signup</a>
      </div>
    </div>
    </div>
  );
};

export default LogIn;
