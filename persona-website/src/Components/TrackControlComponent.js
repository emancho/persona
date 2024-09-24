//== React Lib
import React, {useState} from 'react';
//== Material UI
import { Grid } from '@mui/material';
//== Components
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

/*
Component Description:
    TrackControlComponent :- This component is a combination of the DisplayTrack, ProgressBar, and Controls components
*/

const TrackControlComponent = ({
  currentTrack,
  audioRef,
  setDuration,
  duration,
  progressBarRef,
  timeProgress,
  setTimeProgress,
  handleNext,
  handlePrev,
}) => {
  // hooks maintaining the state of the play button on the Radio Page 
  const [isPlaying, setIsPlaying] = useState(false);

  const radioContentDisplay = {
      display: 'flex',
      justifyContent: 'center',  // Centers horizontally
      alignItems: 'center',      // Centers vertically
      width: '100%',             // Ensures the Grid item takes the full width
      textAlign: 'center',       // Optional: Centers text if needed
      marginTop: '20px', 
      backgroundColor: '#e8f0e8', 
      borderRadius: '4px',
      border: '2px solid white' 
    }

  const progressBarSectionStyle = {
    padding: '40px 0',  // Adjust the value '20px' as needed for top and bottom padding
  };

  // Handles loading the metadata (such as duration) once the audio file is ready
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  // Handles track end behavior
  const onEnded = () => {
    audioRef.current.pause();  // Pause the audio
    audioRef.current.currentTime = 0;  // Reset the track to the beginning
    setIsPlaying(false);  // Update play/pause state
  };

  return (
    <>
      {/* The actual audio element controlling playback */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      {/* Display Track Section */}
      <Grid item sx={radioContentDisplay}>
        <DisplayTrack
          currentTrack={currentTrack}
        />
      </Grid>

      {/* Progress Bar Section */}
      <Grid item sx={progressBarSectionStyle}>
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeProgress={timeProgress}
          duration={duration}
        />
      </Grid>

      {/* Radio Controls Section */}
      <Grid item id="radioControl_section">
        <Controls
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
          setTimeProgress={setTimeProgress}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </Grid>
    </>
  );
};

export default TrackControlComponent;
