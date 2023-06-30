import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LogIn.css';

const LogIn = ({ login }) => {

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      "user": { email: data.email, password: data.password },
    };

    login(userInfo);
    e.target.reset();
  };

  return (
    <div id="login">
    <div  className="login-container">
      <h1 className="entr">Log In</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group2">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group2">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <div className="form-submit">
            <input type="submit" value="Login" className="submit-btn" />
          </div>
        </form>
      <br />
      <div className='login-link2'>
        Not registered yet, <a href="/signup">Signup</a>
      </div>
    </div>
    </div>
  );
};

export default LogIn;
