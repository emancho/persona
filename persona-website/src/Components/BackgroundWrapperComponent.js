import React from 'react';
import Box from '@mui/material/Box';

const BackgroundWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#c5d7cd',
        padding: 5, 
        borderRadius: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundWrapper;
