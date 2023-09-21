import React, { useState } from 'react';
import dynamodb from './awsConfig';
import './Directorship.scss';
import { v4 as uuidv4 } from 'uuid';
import DatamlNavbar from '../../components/Navbar/Navbar';

const DirectorshipPage = () => {

  const uuid = uuidv4();

  const [formData, setFormData] = useState({
    uuid: uuid,
    name: '',
    email: '',
    address: '',
    number: '',
    employees: '',
    scope: '',
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
        TableName: 'DirectorshipEnquiries',
        Item: {
          uuid: uuid,
          name: formData.name,
          email: formData.email,
          address: formData.address,
          number: formData.number,
          employees: formData.employees,
          scope: formData.scope,
        },
      }).promise();

      // Clear form data and set submitted state to true
      setFormData({
        uuid: uuidv4(),
        name: '',
        email: '',
        address: '',
        number: '',
        employees: '',
        scope: '',
      });
      setSubmitted(true);

      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };

  return (
    <div>
      <DatamlNavbar />
      <div className="centered-form">
        <div className="directorship">
          <h1>Directorship Form</h1>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="name">Company Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Contact Email Address:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="number">Phone Number:</label>
              <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="employees">Number of Employees:</label>
              <textarea id="employees" name="employees" value={formData.employees} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="scope">Scope of Directorship Services:</label>
              <textarea id="scope" name="scope" value={formData.scope} onChange={handleChange} required />
            </div>

            <div className="form-buttons">
              <button type="submit">Submit</button>
            </div>
            {submitted && <p className="thank-you-message">Thank you for contacting us.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DirectorshipPage;