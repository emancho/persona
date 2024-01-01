import React from 'react';
import NavBar from '../Components/NavBar';
import ArtistImage from '../Components/ArtistImage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const aboutText = `I am Ed__d w/o the War. Cameroonian-American born on the East Coast 
with a passion to create, ever since childhood. I was making comic books,
writing short stories, creating mini movie scripts and drawing random characters
inspired by the my favorite shows or movies. As I got older, I stopped creating 
and honestly I wasn't a fan of that. 

Now that I'm an adult, I want to explore my creative side again and 
want to use this site as the mainhub for all my creative projects. 
Get hip on my journey and don't forget to subscribe.`;

function AboutPage() {
  return (
    <div>
      <NavBar />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack children vertically
        height: 'calc(100vh - 64px)', // Adjust height based on NavBar height
        textAlign: 'center', // Center text
      }}>
        {/* Image */}
        <ArtistImage 
          path={"../images/AboutMeImg.png"}
          altDesc={"Very attractive man smiling very attractively."}
          w={350}
          h={350} 
        />

        {/* Typography */}
        <Box sx={{
          border: '2px solid #ffffff',
          padding: '16px',
          borderRadius: '4px',
          backgroundColor: '#7ed8d2',
          marginTop: '20px', // Space between image and text
        }}>
          <Typography variant="h3" color="#0a3e0a">
            {"Behind the artist"}
          </Typography>
          <Typography variant="body" color="#000000">
            {aboutText}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AboutPage;
