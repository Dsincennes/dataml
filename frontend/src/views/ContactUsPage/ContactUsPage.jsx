import React from 'react';
import './ContactUsPage.scss';

const ContactUsPage = () => {
  return (
    <div className="contactus">
      <h1>Contact Us</h1>
        <form onSubmit="">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  onChange="" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"  onChange="" required />
          </div>

          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea id="question" name="question" rows="4"  onChange="" required />
          </div>

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onChange="">Cancel</button>
          </div>
        </form>
      </div>
  )
}

export default ContactUsPage


//  value={formData.name} value={formData.email} value={formData.question}