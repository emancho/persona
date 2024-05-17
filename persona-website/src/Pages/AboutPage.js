//=== React Lib
import React from 'react';
//=== Components
import AboutMeLayout from '../Components/AboutMeLayout'
import WebPageOutline from '../Components/WebpageOutline'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'

function AboutPage() {
  return (
    <WebPageOutline
      pageTitle={'Behind the Artist'}
      pageComponent={
        <BackgroundWrapper children={
          <AboutMeLayout/>
        }/>
      }
    />
  );  
}

export default AboutPage;
