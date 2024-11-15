import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import axios from 'axios';

function SubscriptionForm({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteArtist, setFavoriteArtist] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      setError('Name and Email are required!');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(''); // Clear any previous errors
      
    // data to pass in POST request
    const userData = {
        body: JSON.stringify({
            name: name,
            email: email,
            favoriteArtist: favoriteArtist
        })
    };

    // console.log('The obj is: ' + JSON.stringify(userData))

    axios.post('https://prlcog0y6e.execute-api.us-east-1.amazonaws.com/dev/submit', userData)
    .then(function(response){
        if (response.status === 200){
            // New User is successfully created so activate the Magic
            setSuccessMessage('Welcome!');
            setTimeout(() => {
            setSuccessMessage('');
            onClose(); // Close the dialog on successful submission
            }, 2000);
        }
    })
    .catch(function(err){
        if (err.response && err.response.data.message === 'Email already exists') {
            setError('Email is already registered.');
        } else {
            // Its
            //setError('It's not your fault, it's mine');
            setError('Error Message:- ' + err);
        }
    })
    };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          required
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="dense"
        />
        <TextField
          required
          label="Email"
          type="email" // Sets input type to email
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="dense"
        />
        <TextField
          label="Who's your favorite Artist?"
          fullWidth
          value={favoriteArtist}
          onChange={(e) => setFavoriteArtist(e.target.value)}
          margin="dense"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SubscriptionForm;
