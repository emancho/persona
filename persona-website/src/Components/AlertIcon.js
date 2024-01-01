import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const AlertIcon = ({ item }) => {
  const handleClick = () => {
    alert(`${item.alert}`);
  };

  return (
    <IconButton
      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
      aria-label={`${item.title}`}
      onClick={handleClick}  // Add the onClick event handler here
    >
      <InfoIcon />
    </IconButton>
  );
};

export default AlertIcon;