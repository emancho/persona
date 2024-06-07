//=== React Lib
import React from 'react';
//=== Components
import AboutMeLayout from '../Components/AboutMeLayout'
import WebPageOutline from '../Components/WebpageOutline'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'
import AnimatedText from '../Components/AnimatedText';
// == Description:
// The homepage. Consists of a layout similar to a music player containing a 
// profile picture, artist name and button options that navigate to other pages. 
// ** Uses Material UI for design and display options.

function AboutPage() {
  return (
    <WebPageOutline
      pageTitle={<AnimatedText 
        title={'Behind the Artist'}/>
      }
      pageComponent={
        <BackgroundWrapper children={
          <AboutMeLayout/>
        }/>
      }
    />
  );  
}

export default AboutPage;
