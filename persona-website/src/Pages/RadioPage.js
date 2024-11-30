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
// The Radio Page - This page is the Radio Show page. This page has the location of all radio episodes. Consist
// of the related episode's image, playtime bar, playback buttons and list of songs within the radio show. 

function RadioPage() {
    // The initial track representing the most recent radio episode
    const initTrack = 3;
    // states
    const [trackIndex, setTrackIndex] = useState(initTrack);
    const [currentTrack, setCurrentTrack] = useState(episodes[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [curTrackList, setCurTrackList] = useState(RADIO_EPS[trackIndex])
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
  
    // Mutable ref objects tied to the audio and progress bar
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    // the function responsible for the behavior of the next button on the Radio Page
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
        setCurTrackList(RADIO_EPS[trackIndex + 1]);
      }
      
      // Plays the next ep of the Radio Show when the play button is in pause state 
      if(audioRef.current){
        if(audioRef.current.pause ){ 
          setIsPlaying(true);
        }
      }
    };

    // The function responsible for the behavior of the previous button on the Radio Page
    const handlePrev = () => {
      // Shifts current episode to the previous track
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(episodes[trackIndex - 1]);
      setCurTrackList(RADIO_EPS[trackIndex - 1]);
      
      // Plays the previous ep of the Radio Show when the play button is in pause state
      if(audioRef.current){
        if(audioRef.current.pause ){ 
          setIsPlaying(true);
        }
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
            trackIndex={trackIndex}
            audioRef={audioRef}
            setDuration={setDuration}
            progressBarRef={progressBarRef}
            handleNext={handleNext}
            handlePrev={handlePrev}
            timeProgress={timeProgress}
            duration={duration}
            setTimeProgress={setTimeProgress}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />}
          bottomSection={<RadioList listOfEpisodes={curTrackList.radioTrackList} />}
        />
      }/>
  );
}

export default RadioPage;
