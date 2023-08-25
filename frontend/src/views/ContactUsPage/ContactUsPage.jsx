import React, { useState, useEffect } from 'react';
import dynamodb from './awsConfig'; // Import the AWS SDK configuration
import './ContactUsPage.scss';
import { SHA256 } from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

const ContactUsPage = () => {

  const uuid = uuidv4(); 

  const [formData, setFormData] = useState({
    uuid: uuid,
    name: '',
    email: '', 
    question: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const hashedValue = SHA256(formData.question).toString();

      e.preventDefault();
      try {
        // Save the form data to DynamoDB
        dynamodb.put({
          TableName: 'ContactForm', // Replace with your actual DynamoDB table name
          Item: {
            uuid: uuid,
            name: formData.name,
            email: formData.email,
            question: formData.question,
          },
        }).promise();
        console.log('Data submitted successfully');
      } catch (error) {
        console.error('Error submitting data', error);
      }

  };


  return (
    <div className="contactus">
      <h1>Contact Us</h1>
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
            {/* <button type="button" onChange="">Cancel</button> */}
          </div>
        </form>
       
      </div>
  )
}

export default ContactUsPage


//  value={formData.name} value={formData.email} value={formData.question}