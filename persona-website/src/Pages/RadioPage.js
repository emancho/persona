import React from 'react';
import '../App.css';
//== Compontents 
import WebPageOutline from '../Components/WebpageOutline'
import RadioLayout from '../Components/RadioPageLayout'
import AnimatedText from '../Components/AnimatedText';

// == Description:
// The Radio Page - Location for the radio episodes.
// The pageTitle is the Title displayed on the page
// The pageComponent is the Radio Layout Compontent

function RadioPage() {
  return (
    <WebPageOutline
      pageTitle={<AnimatedText 
        title={'EDD-Perience Radio'}/>
      }
      pageComponent={<RadioLayout/>}
      />
  );
}

export default RadioPage;
