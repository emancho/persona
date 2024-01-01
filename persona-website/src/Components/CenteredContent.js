import React from 'react';
import Box from '@mui/material/Box';

const CenteredContent = ({webpage}) => {
  return (
    <Box
      display="flex" // Enables Flexbox
      justifyContent="center" // Centers horizontally
      alignItems="center" // Centers vertically
      height="120vh" // Full viewport height
    >
      {/* Your content goes here */}
      <div>{webpage}</div>
    </Box>
  );
};

export default CenteredContent;
