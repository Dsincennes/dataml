import React, { useState } from 'react';
import dynamodb from './awsConfig';
import './ContactUsPage.scss';
import { v4 as uuidv4 } from 'uuid';

const ContactUsPage = () => {
  const uuid = uuidv4();

  const [formData, setFormData] = useState({
    uuid: uuid,
    name: '',
    email: '',
    question: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the form data to DynamoDB
      dynamodb.put({
        TableName: 'ContactForm',
        Item: {
          uuid: uuid,
          name: formData.name,
          email: formData.email,
          question: formData.question,
        },
      }).promise();

      // Clear form data and set submitted state to true
      setFormData({
        uuid: uuidv4(),
        name: '',
        email: '',
        question: '',
      });
      setSubmitted(true);

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
        </div>
        {submitted && <p className="thank-you-message">Thanks for contacting us</p>}
      </form>
    </div>
  );
};

export default ContactUsPage;
