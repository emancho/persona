//=== React Lib && CSS
import React from 'react';
import '../App.css';
//== Compontents 
import WebPageOutline from '../Components/WebpageOutline'
import RadioLayout from '../Components/RadioPageLayout'
import AnimatedText from '../Components/AnimatedText';

// == Description:
// The Radio Page - Location for the radio episodes.
// + pageTitle : the title displayed on the page
// + pageComponent : the Radio Layout Compontent

function RadioPage() {
  return (
    <WebPageOutline
      pageTitle={<AnimatedText 
        title={'EDD-Perience Radio'}/>
      }
      borderObject={<RadioLayout/>}
      />
  );
}

export default RadioPage;
