//=== React Lib && CSS
import React, { useRef, useState, useCallback, useMemo } from 'react';
import '../App.css';
//== Components 
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
import TrackControlComponent from '../Components/TrackControlComponent'
import RadioList from '../Components/RadioListComponent'
//== Data
import { episodes } from '../data/episodes';
import { RADIO_EPS } from '../Constants'

// == Description:
// The Radio Page - This page is the Radio Show page. This page has the location of all radio episodes.
// Consists of the related episode's image, playtime bar, playback buttons and list of songs within the radio show. 

function RadioPage() {
  // The initial track representing the most recent radio episode
  const totalTracks = useMemo(() => episodes.length, []);
  const initTrack = totalTracks - 1;
  
  // states
  const [trackIndex, setTrackIndex] = useState(initTrack);
  const [currentTrack, setCurrentTrack] = useState(episodes[initTrack]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [curTrackList, setCurTrackList] = useState(RADIO_EPS[initTrack]);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Mutable ref objects tied to the audio and progress bar
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  // Memoize event handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    // When hitting the next button on the last episode, navigate to the first episode
    if (trackIndex >= totalTracks - 1) {
      setTrackIndex(0);
      setCurrentTrack(episodes[0]);
      setCurTrackList(RADIO_EPS[0]);
    } else {
      const nextIndex = trackIndex + 1;
      setTrackIndex(nextIndex);
      setCurrentTrack(episodes[nextIndex]);
      setCurTrackList(RADIO_EPS[nextIndex]);
    }
    
    // Plays the next ep of the Radio Show when the play button is in pause state 
    if (audioRef.current && audioRef.current.paused) { 
      setIsPlaying(true);
    }
  }, [trackIndex, totalTracks, audioRef]);

  const handlePrev = useCallback(() => {
    // Condition that doesn't allow going below the first track due to out of bounds
    if (trackIndex <= 0) return;
    
    // Shifts current episode to the previous track
    const prevIndex = trackIndex - 1;
    setTrackIndex(prevIndex);
    setCurrentTrack(episodes[prevIndex]);
    setCurTrackList(RADIO_EPS[prevIndex]);
    
    // Plays the previous ep of the Radio Show when the play button is in pause state
    if (audioRef.current && audioRef.current.paused) { 
      setIsPlaying(true);
    }
  }, [trackIndex, audioRef]);

  const jumpToTimestamp = useCallback((timestamp) => {
    // Only proceed if timestamp is a valid number
    if (audioRef.current && typeof timestamp === 'number' && !isNaN(timestamp)) {
      // Set the current time of the audio to the timestamp
      audioRef.current.currentTime = timestamp;
      
      // Update progress bar value
      if (progressBarRef.current) {
        progressBarRef.current.value = timestamp;
      }
      
      // Update time progress state
      setTimeProgress(timestamp);
      
      // If paused, start playing
      if (audioRef.current.paused) {
        setIsPlaying(true);
      }
    }
  }, [audioRef, progressBarRef]);

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
            />
          }
          bottomSection={            
          <RadioList 
            listOfEpisodes={curTrackList.radioTrackList}
            spotifyLink={curTrackList.spotifyPlaylist} 
            onTrackClick={jumpToTimestamp}
            currentTime={timeProgress}
          />
          }
        />
      }
    />
  );
}

export default RadioPage;