import React from 'react';
// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Component
import ArtistImage from '../Components/ArtistImage';
// CSS
import '../App.css';

// The Bio of the About Me Page
const aboutText = `I am Ed__d w/o the War. A Cameroonian-American born in the East Coast, 
with a passion to create since childhood. From an early age; I was making comic books,
writing short stories, creating rough drafts for movie scripts and drawing random characters
inspired by my favorite animated shows or the world around me. Unfortunately as I got older, the creating stop and any new idea would figuratively
become tossed away due to "growing up"...and honestly I'm not a fan of that. 

As I enter my 30s, I'm still getting older but the passion is still there and I have the power of "Trying". So as I rediscover my creative side again, I  
want to use this site as the start of this creative journey. Be sure to join the newsletter on the Contact Page for updates.`;

/*
Function: AboutMeLayout
Description: This is responsible for dictating the layout of the 'About Me' Page
*/
function AboutMeLayout() {
  return (
    <div>
      {/*== The Section that contains the Artist Image ==*/}
      <Box id='about_me_img_section'>
        {/* Image for the About Me Page */}
        <ArtistImage 
          path={"/images/AboutMeImg.png"}
          altDesc={"A very attractive man smiling very attractively."}
          w={250}
          h={300} 
        />

        {/*== The Section containing the bio for the About Me page ==*/}
        <Box id='about_me_bio_section'>
          <Typography variant="body" color="#0a3e0a">
            {aboutText}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AboutMeLayout;
