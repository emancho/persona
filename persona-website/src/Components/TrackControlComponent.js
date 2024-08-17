import React from 'react';
import { Grid } from '@mui/material';
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

const TrackControlComponent = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  timeProgress,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  setCurPlaylistState,
}) => {

  const radioContentDisplay = {
      display: 'flex',
      justifyContent: 'center',  // Centers horizontally
      alignItems: 'center',      // Centers vertically
      width: '100%',             // Ensures the Grid item takes the full width
      textAlign: 'center',       // Optional: Centers text if needed
    }

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
      <Grid item id="progressBar_section">
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
          tracks={tracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentTrack={setCurrentTrack}
          handleNext={handleNext}
          setCurPlaylistState={setCurPlaylistState}
        />
      </Grid>
    </>
  );
};

export default TrackControlComponent;
