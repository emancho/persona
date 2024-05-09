//=== React Lib
import React from 'react';
//=== Components
import AboutMeLayout from '../Components/AboutMeLayout'
import WebPageOutline from '../Components/WebpageOutline'

function AboutPage() {
  return (
    <WebPageOutline
      pageTitle={'Behind the Artist'}
      pageComponent={<AboutMeLayout/>}
    />
  );  
}

export default AboutPage;
