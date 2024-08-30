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
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(episodes[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [curTrackList, setCurTrackList] = useState(RADIO_EPS[0])
    const [duration, setDuration] = useState(0);
  
    // reference
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
  
    const handleNext = () => {
      if (trackIndex >= episodes.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(episodes[0]);
        setCurTrackList(RADIO_EPS[0])
      } else {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(episodes[trackIndex + 1]);
        setCurTrackList(RADIO_EPS[trackIndex + 1])
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
            timeProgress={timeProgress}
            duration={duration}
            setTimeProgress={setTimeProgress}
            tracks={episodes}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setCurrentTrack={setCurrentTrack}
            setCurPlaylistState={setCurTrackList}
          />}
          bottomSection={<RadioList listOfEpisodes={curTrackList.radioTrackList} />}
        />
      }/>
  );
}

export default RadioPage;
