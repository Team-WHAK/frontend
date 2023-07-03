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
            <label style={{fontSize:'20px'}}>Name</label>
            <input type="text" id="name" name="name"  style={{height:'35px', fontSize:'18px'}} value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group3">
            <label style={{fontSize:'20px'}}>Email</label>
            <input type="email" id="email" name="email" style={{height:'35px',fontSize:'18px'}} value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group3">
            <label style={{fontSize:'20px'}}>Message</label>
            <textarea id="msg" name="message" rows="5" style={{ height:'100px', maxHeight:'100px', fontSize:'18px',}} value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" style={{height:'50px', width:'160px', marginLeft:'145px'}}>Submit</button>
        </form>

      </div>
      </div>
    </div>
  );
};

export default ContactForm;
