import React from 'react';
import { Box, Typography } from '@mui/material';

const MainContentComponent = ({ title, topSection, topStyle={marginTop: '20px'}, bottomSection, bottomStyle={marginTop: '20px'}}) => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Title Section */}
      {title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      
      {/* Main Section */}
      {(topSection) && (
        <Box sx={topStyle}>
          {topSection}
        </Box>
      )}
      
      {/* Optional Section */}
      {(bottomSection)  && (
        <Box sx={bottomStyle}>
          {bottomSection}
        </Box>
      )}
    </Box>
  );
};

export default MainContentComponent;
