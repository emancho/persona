import React from 'react';
import Box from '@mui/material/Box';

const BackgroundWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#c5d7cd', // Dark green color
        padding: 5, // Adjust the padding as needed
        borderRadius: 4, // Optional: for rounded corners
        // Add other styles as needed
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundWrapper;
