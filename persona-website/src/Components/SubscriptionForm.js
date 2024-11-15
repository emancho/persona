import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import axios from 'axios';

function SubscriptionForm({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteArtist, setFavoriteArtist] = useState('');
  const [error, setError] = useState('');

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

    try {
        // User input for POST request
        const userData = {
            body: JSON.stringify({
                name: name,
                email: email,
                favoriteArtist: favoriteArtist
            })
        };

        const response = await axios.post('https://prlcog0y6e.execute-api.us-east-1.amazonaws.com/dev/submit', userData)
        if (response.status === 200){
            //Successful Call
            const data = response.data

            if (data.statusCode === 201) {
                // New entry is created and added to database
                setTimeout(() => {
                onClose(); // Close the dialog on successful submission
                }, 2000);
            }
        }
    } 
    catch (err) {
        console.log('API Request Error: ' + err)
    }
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
