//=== React Lib
import React from 'react';
//=== Components
import AboutMeLayout from '../Components/AboutMeLayout'
import WebPageOutline from '../Components/WebpageOutline'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'
import AnimatedText from '../Components/AnimatedText';
import BorderWrapper from '../Components/BorderWrapperComponent';

// == Description:
// The About Me Page - Location for infomation about the creator behind the website. 
// + pageTitle: the title displayed on the page
// + pageComponent: the AboutMe Page component

function AboutPage() {
  return (
    <WebPageOutline
    pageTitle={<AnimatedText 
        title={'Behind the Artist'}/>
      }
      borderObject={
        // <BackgroundWrapper children={
        //   <AboutMeLayout/>
        // }/>
        <BorderWrapper/>
      }
    />
  );  
}

export default AboutPage;
