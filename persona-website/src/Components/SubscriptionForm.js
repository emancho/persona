import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

// Ideally, this would come from an environment variable
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function SubscriptionForm({ open, onClose }) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteArtist, setFavoriteArtist] = useState('');
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    // Validate input
    if (!name || !email) {
      setError('Name and Email are required!');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(''); // Clear any previous errors
    setIsSubmitting(true);

    try {
      // Properly structure data for Axios
      const userData = {
        name: name,
        email: email,
        favoriteArtist: favoriteArtist
      };

      const response = await axios.post(API_ENDPOINT, userData);
      
      if (response.data && response.data.statusCode === 201) {
        // Show success message
        setSubmitSuccess(true);
        
        // Clear form
        setName('');
        setEmail('');
        setFavoriteArtist('');
        
        // Auto close after delay
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false); // Reset for next open
        }, 2000);
      } else {
        // Handle unexpected response
        setError('Mistakes happen. Try again');
      }
    } catch (err) {
      console.error('API Request Error:', err);
      
      // More helpful error message based on response
      if (err.response && err.response.data && err.response.data.message) {
        setError(`Submission failed: ${err.response.data.message}`);
      } else {
        setError('Submission failed. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset form state when closing
    if (!isSubmitting) {
      setError('');
      setSubmitSuccess(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe to Newsletter</DialogTitle>
      <DialogContent>
        <TextField
          required
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="dense"
          disabled={isSubmitting}
          error={error.includes('Name')}
        />
        <TextField
          required
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="dense"
          disabled={isSubmitting}
          error={error.includes('email')}
        />
        <TextField
          label="Who's your favorite Artist?"
          fullWidth
          value={favoriteArtist}
          onChange={(e) => setFavoriteArtist(e.target.value)}
          margin="dense"
          disabled={isSubmitting}
        />
        
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        {submitSuccess && <Alert severity="success" sx={{ mt: 2 }}>Successfully subscribed!</Alert>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          color="primary" 
          disabled={isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SubscriptionForm;