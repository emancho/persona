import React from 'react';
import { Box, Typography } from '@mui/material';

function LargeTextComponent({ text }) {
  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', overflowY: 'auto', maxHeight: '400px' }}>
      <Typography variant="body1" gutterBottom>
        {text.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Typography>
    </Box>
  );
}

export default LargeTextComponent;
