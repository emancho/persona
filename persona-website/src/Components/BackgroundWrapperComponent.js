//=== React Lib
import React from 'react';
//=== Material UI
import Box from '@mui/material/Box';

/*
Function: BackgroundWrapper
Descriptions: The Wrapper component used to wrap a child component around a background border
*/
const BackgroundWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#c5d7cd',
        borderRadius: 4,
        border: '#00000'
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundWrapper;
