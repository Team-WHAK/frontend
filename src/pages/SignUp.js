import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import mockUsers from "../mockUsers";
import '../styles/SignUp.css';

const SignUp = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const newUser = {
      id: mockUsers.length + 1,
      email: data.email,
    };

    mockUsers.push(newUser); 

    console.log(newUser);
    navigate("/:id");
    e.target.reset();
  };

  return (
    <div id="signup">
      <div  data-testid="signup-component" className="signup-container">
        <h2 className='join'>Sign Up</h2>
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
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="submit-btn" />
          </div>
        </form>
        <div className="login-link">
          Already registered? <a href="/login">Login</a> here.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
