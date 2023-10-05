import * as React from 'react';
///--- Bottom Navigation
import BadgeIcon from '@mui/icons-material/Badge';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
//--- Orination and style 
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function AboutMePage() {
  return (
    < WebpageLayout/>
  );
}

function WebpageLayout() {

  return (
    <Box sx={{pb: 7}}>
      <CssBaseline />
      <div>
        <p>This is the About Me Page</p>
      </div>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation     
            showLabels
          >
          <BottomNavigationAction
            label="Home"
            value="homePage"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Contact Me"
            value="socialLinks"
            icon={<MailIcon />}
          />
          <BottomNavigationAction
            label="About Me"
            value="aboutMePage"
            icon={<BadgeIcon />}
          />
          <BottomNavigationAction 
            label="Artist Alley" 
            value="canvasPage" 
            icon={<ColorLensIcon />} 
          />
          </BottomNavigation>
      </Paper>
    </Box>
  );
  }

export default AboutMePage;