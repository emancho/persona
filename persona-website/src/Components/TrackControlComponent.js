//== React Lib
import React from 'react';
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
  progressBarRef,
  handleNext,
  handlePrev,
  timeProgress,
  duration,
  setTimeProgress
}) => {

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


  return (
    <>
      {/* Display Track Section */}
      <Grid item sx={radioContentDisplay}>
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
          handleNext={handleNext}
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
        />
      </Grid>
    </>
  );
};

export default TrackControlComponent;
