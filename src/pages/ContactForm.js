import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id='contact'>
<div className='shadow2'>
      <div className="contact-form animate__animated 
                    animate__fadeInUp animate__slower	3s">
        <h1 className='snd'>Contact Us</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group3">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group3">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group3">
            <label htmlFor="message">Message</label>
            <textarea id="msg" name="message" rows="5" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" className='form-submit'>Submit</button>
        </form>

      </div>
      </div>
    </div>
  );
};

export default ContactForm;
