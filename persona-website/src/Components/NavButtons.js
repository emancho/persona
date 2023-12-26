import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

function NavButtons({buttonData}) {
    
    return (
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          {buttonData.map(({ icon, link }, index) => (
            <IconButton key={index} onClick={() => window.location.href = link}>
              {React.createElement(icon, { fontSize: 'large' })}
            </IconButton>
          ))}
        </Stack>
      );












//     const iconSize = 'large';

//   return (
//     <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" >
//       <IconButton><SkipPrevIcon fontSize={iconSize} /></IconButton>
//       <IconButton><PlayArrowIcon fontSize={iconSize} /></IconButton>
//       <IconButton><SkipNextIcon fontSize={iconSize} /></IconButton>
//     </Stack>
//   );
}

export default NavButtons;