import React, { useState } from 'react';
import dynamodb from './awsConfig'; // Import the AWS SDK configuration
import './Contact.css'; // Import the CSS file for styling

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the form data to DynamoDB
       dynamodb.put({
        TableName: 'ContactUsFormData', // Replace with your actual DynamoDB table name
        Item: {
          firstName: formData.name,
          email: formData.email,
          question: formData.question,
        },
      }).promise();
  
      console.log('Data submitted successfully');
      onClose();
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea id="question" name="question" rows="4" value={formData.question} onChange={handleChange} required />
          </div>

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
