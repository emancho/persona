//=== React Lib && CSS
import React, { useRef, useState } from 'react';
import '../App.css';
//== Compontents 
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
import TrackControlComponent from '../Components/TrackControlComponent'
import RadioList from '../Components/RadioListComponent'
//== Data
import { episodes } from '../data/episodes';
import {RADIO_EPS} from '../Constants'

// == Description:
// The Radio Page - This page is the Radio Show page. This page is the location of all radio episodes. Consist
// of the related episode's image, playtime bar, playback buttons and list of songs within the radio show. 

function RadioPage() {
    // states
    const [trackIndex, setTrackIndex] = useState(1);
    const [currentTrack, setCurrentTrack] = useState(episodes[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [curTrackList, setCurTrackList] = useState(RADIO_EPS[1])
    const [duration, setDuration] = useState(0);
  
    // Audio and Progress bar reference
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    // the function responsible for the behavior of the next button
    const handleNext = () => {
      // When hitting the next button on the last episode, navigate to the first episode
      if (trackIndex >= episodes.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(episodes[0]);
        setCurTrackList(RADIO_EPS[0])
      } 
      else {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(episodes[trackIndex + 1]);
        setCurTrackList(RADIO_EPS[trackIndex + 1])
      }
    };

    // The function responsible for the behavior of the previous button
    const handlePrev = () => {
      // Allows previous travseral except when at the first episode
      if (trackIndex !== 0) {
        setTrackIndex((prev) => prev - 1);
        setCurrentTrack(episodes[trackIndex - 1]);
        setCurTrackList(RADIO_EPS[trackIndex - 1])
      }
    };

  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'EDD-Perience Radio'}
            />
          }
          topSection={      
          <TrackControlComponent
            currentTrack={currentTrack}
            audioRef={audioRef}
            setDuration={setDuration}
            progressBarRef={progressBarRef}
            handleNext={handleNext}
            handlePrev={handlePrev}
            timeProgress={timeProgress}
            duration={duration}
            setTimeProgress={setTimeProgress}
          />}
          bottomSection={<RadioList listOfEpisodes={curTrackList.radioTrackList} />}
        />
      }/>
  );
}

export default RadioPage;
