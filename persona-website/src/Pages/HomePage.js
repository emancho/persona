//=== React Libraries 
import React from "react";
//=== Material UI Icon buttons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext'; 
import SkipPrevIcon from '@mui/icons-material/SkipPrevious';
//=== Components
import HomePageMainContent from '../Components/HomePageMainContent'
import WebpageTemplate from "../Components/WebpageTemplate";

// == Description:
// Homepage - This page is the home page. The page consist of the component layout to a music player. Has a image 
// displayed, title and navigation buttons that led to other webpages [PrevButton - Contact page, PlayButton - About Me 
// page, NextButton - Projects page]

function HomePage(){
  /* An array of button objects. The icon represents the button type and the link is the page the button directs to */
  const navButtons = [
    { icon: SkipPrevIcon, link: '/contact' },
    { icon: PlayArrowIcon, link: '/aboutme' },
    { icon: SkipNextIcon, link: '/projects' },
  ];

  return (
    <WebpageTemplate
      mainContent={
          <HomePageMainContent
            imagePath={"/images/HomepageImgv4.gif"} 
            imageAlt={"Blurred gif of my cute self."}
            imageWidth={500} 
            imageHeight={600}
            buttons= {navButtons}
          />
      }
    />
  );
}

export default HomePage