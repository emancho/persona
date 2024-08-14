//=== React Lib
import React from 'react';
//=== Components
import AboutMeLayout from '../Components/AboutMeLayout'
import WebPageOutline from '../Components/WebpageOutline'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'
import AnimatedText from '../Components/AnimatedText';
import BorderWrapper from '../Components/BorderWrapperComponent';
import ArtistImage from '../Components/ArtistImage';
//=== Material UI
import Typography from '@mui/material/Typography';

// == Description:
// The About Me Page - Location for infomation about the creator behind the website. 
// + pageTitle: the title displayed on the page
// + pageComponent: the AboutMe Page component

// The Bio of the About Me Page
const aboutText = `I am Ed__d w/o the War. A Cameroonian-American born in the East Coast, 
with a passion to create since childhood. From an early age; I was making comic books,
writing short stories, creating rough drafts for movie scripts and drawing random characters
inspired by my favorite animated shows or the world around me. Unfortunately as I got older, the creating stop and any new idea would figuratively
become tossed away due to "growing up"...and honestly I'm not a fan of that. 

As I enter my 30s, I'm still getting older but the passion is still there and I have the power of "Trying". So as I rediscover my creative side again, I  
want to use this site as the start of this creative journey. Be sure to join the newsletter on the Contact Page for updates.`;


function AboutPage() {
  return (
    <WebPageOutline
    pageTitle={<AnimatedText 
        title={'Behind the Artist'}/>
      }
      borderObject={
        <BorderWrapper 
          image={
            <ArtistImage 
              path={"/images/AboutMeImg.png"}
              altDesc={"A very attractive man smiling very attractively."}
              w={280}
              h={300} 
            />}
          topBlock={
            <Typography variant="body" color="#0a3e0a">
              {aboutText}
            </Typography>
          }
        />
      }
    />
  );  
}

export default AboutPage;
