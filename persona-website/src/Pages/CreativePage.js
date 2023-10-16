import React, { useState, useEffect } from 'react';
// --- Material UI
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
// Components 
function CreativePage() {

  return (
    < WebpageLayout/>
  );
}

function WebpageLayout() {

return (
  <Box sx={{pb: 7}}>
    <CssBaseline />
    <div>
      <CountdownPage/>
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

function CountdownPage() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Set the target date (November 1, 2023)
    const targetDate = new Date('2023-11-01T00:00:00'); // Assuming midnight of November 1

    // Set the initial date (October 4, 2023)
    const initialDate = new Date('2023-10-04T00:00:00'); // Assuming midnight of October 4

    // Calculate the time remaining in milliseconds
    const timeRemaining = targetDate - initialDate;

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setCountdown('Countdown expired');
      } else {
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown(
          `${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`
        );
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="countdown-page">
      <h1>Countdown: {countdown}</h1>
    </div>
  );
}

export default CreativePage;