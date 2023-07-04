import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';

function Contact() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setOpen(false);
    navigate(-1); // Go back to the previous page
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Question:', question);
    // Reset the form fields
    setName('');
    setEmail('');
    setQuestion('');
    // Close the dialog box
    setOpen(false);
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    // Automatically open the dialog when the component mounts
    setOpen(true);
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <TextField
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <TextField
              label="Question"
              multiline
              rows={4}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              required
            />

            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button type="submit" color="primary">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Contact;