// Contact.js

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, for example, send the data to a server or perform any other actions.
    console.log('Form Data:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className='contactForm'>
      <div className="form-group">
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            </label>
        </div>
        <div className="form-group">   
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            </label>
        </div>
        <div className="form-group">
            <label>
            Message:
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            </label>
        </div>  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
