import React from 'react';
import ArtistImage from '../Components/ArtistImage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const aboutText = `I am Ed__d w/o the War. Cameroonian-American born on the East Coast, 
with a passion to create since childhood. From a very young age; I was making comic books,
writing short stories, creating mini movie scripts and drawing random characters
inspired by the my favorite shows or movies. Unfortunately as I got older, the creating stop with the blueprints of new ideas figuratively
collecting dust in my head...which honestly I'm not a fan of. 

I'm in my 30s now but that passion is still there despite the lack of creating. I want to explore my creative side again and  
want to use this site as the mainhub for all my creative projects. Especailly when it comes to music. Come along with me on my journey and subscribe to ya boi.`;

function AboutMeLayout() {
  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack children vertically
        textAlign: 'center', // Center text
      }}>
        {/* Image */}
        <ArtistImage 
          path={"/images/AboutMeImg.png"}
          altDesc={"Very attractive man smiling very attractively."}
          w={250}
          h={300} 
        />

        {/* Typography */}
        <Box sx={{
          border: '2px solid #ffffff',
          padding: '20px',
          borderRadius: '4px',
          backgroundColor: '#7ed8d2',
          alignItems: 'center', // Center vertically
          marginTop: '20px', // Space between image and text
          display: 'flex',
          maxWidth: '80vh'
        }}>
          <Typography variant="body" color="#000000">
            {aboutText}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AboutMeLayout;
