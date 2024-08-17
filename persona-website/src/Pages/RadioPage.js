//=== React Lib && CSS
import React from 'react';
import '../App.css';
//== Compontents 
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
import AudioPlayer from '../Components/AudioPlayer';

// == Description:
// The Radio Page - Location for the radio episodes.

function RadioPage() {
  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'EDD-Perience Radio'}
            />
          }
          topSection={<AudioPlayer/>}
        />
      }/>
  );
}

export default RadioPage;
