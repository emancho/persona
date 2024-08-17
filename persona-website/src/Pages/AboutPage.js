//=== React Lib
import React from 'react';
//=== Components
import AnimatedText from '../Components/AnimatedText';
import ArtistImage from '../Components/ArtistImage';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
//=== Material UI
import Typography from '@mui/material/Typography';

// == Description:
// The About Me Page - Location for infomation about the creator behind the website. 

// The Bio of the About Me Page
const aboutText = `I am Ed__d w/o the War. A Cameroonian-American born in the East Coast, 
with a passion to create since childhood. From an early age; I was making comic books,
writing short stories, creating rough drafts for movie scripts and drawing random characters
inspired by my favorite animated shows or the world around me. Unfortunately as I got older, the creating stop and any new idea would figuratively
become tossed away due to "growing up"...and honestly I'm not a fan of that. 

As I enter my 30s, I'm still getting older but the passion is still there and I have the power of "Trying". So as I rediscover my creative side again, I  
want to use this site as the start of this creative journey. Be sure to join the newsletter on the Contact Page for updates.`;

// Styling for the top section
const topSectionStyle = {
  display: 'flex',            // Enables flexbox layout
  justifyContent: 'center',    // Centers content horizontally
  alignItems: 'center',        // Centers content vertically
  marginBottom: '25px',        // Keeps the existing margin-bottom
};

// Styling for the bottom section
const bottomStyle = { 
  marginTop: '20px', 
  backgroundColor: '#e0e0e0', 
  padding: '10px', 
  borderRadius: '4px' 
}

function AboutPage() {
  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'Behind the Artist'}/>
          }
          topSection={
            <ArtistImage 
              path={"/images/AboutMeImg.png"}
              altDesc={"A very attractive man smiling very attractively."}
              w={280}
              h={300} 
            />
          }
          topStyle={topSectionStyle}
          bottomSection={
            <Typography variant="body" color="#0a3e0a">
              {aboutText}
            </Typography>
          }
          bottomStyle={bottomStyle}
        />
      }
    />
  );  
}

export default AboutPage;
