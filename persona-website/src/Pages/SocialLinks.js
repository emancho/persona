import * as React from 'react';
// --- Material UI
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
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
function SocialLinks() {

  return (
    < WebpageLayout/>
  );
}

function WebpageLayout() {

return (
  <Box sx={{pb: 7}}>
    <CssBaseline />
    <div>
      <VinylList/>
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

function VinylList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={1}>
        <ListSubheader component="div">Contact Me</ListSubheader>
      </ImageListItem>
        <ImageListItem key={"Test"}>
          <img
            src={`https://pngimg.com/uploads/vinyl/vinyl_PNG66.png`}
            alt={'#1'}
            loading="lazy"
          />
          <ImageListItemBar
            title={'Edd Man'}
            subtitle={'I wanna be an artist'}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
  );
}

export default SocialLinks;