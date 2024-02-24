import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavButtons({ buttonData }) {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      {buttonData.map(({ icon, link }, index) => (
        <IconButton key={index} onClick={() => navigate(link)}>
          {React.createElement(icon, { fontSize: 'large' })}
        </IconButton>
      ))}
    </Stack>
  );
}

export default NavButtons;
