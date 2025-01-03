import React, { useState } from 'react';
import 'C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/styles/ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    reason: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.firstName || !formData.lastName || !formData.mobile || !formData.email || !formData.reason) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    if (formData.reason.length > 50) {
      setErrorMessage('Reason should not exceed 50 characters.');
      return;
    }

    setErrorMessage('');

    // Use EmailJS or your own backend to send an email
    const response = await fetch('YOUR_EMAIL_API_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="input-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label>Reason (max 50 characters)</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why are you contacting us?"
            maxLength="50"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
