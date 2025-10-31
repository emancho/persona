//== React Lib
import React, { memo } from 'react';
import _ from 'lodash';
//== Material UI
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
//== Components
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

/*
Component Description:
    TrackControlComponent :- This component is a combination of the DisplayTrack, ProgressBar, and Controls components
*/

// The sx prop for the Display Track  
const RadioContentDisplay = {
  display: 'flex',
  justifyContent: 'center',  // Centers horizontally
  alignItems: 'center',      // Centers vertically
  width: '100%',             // Ensures the Grid item takes the full width
  textAlign: 'center',       // Optional: Centers text if needed
  marginTop: '20px', 
  backgroundColor: '#e8f0e8', 
  borderRadius: '4px',
  border: '2px solid white' 
};

// The sx prop for the progress bar section
const ProgressBarSectionStyle = {
  padding: '40px 0',  // Adjust the value '20px' as needed for top and bottom padding
};

//=== The style utlity for the Select component in the Dropdown selection
const StyledTrackSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#eeeeee',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '2px',
  },
  '.MuiSelect-icon': {
    color: theme.palette.primary.main,
  },
}));

// The style ultity for the MenuItem component in the Dropdown selection
const StyledTrackMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
       backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    }
  },
}));

// Memoize the component to prevent unnecessary re-renders
const TrackControlComponent = memo(({
  currentTrack,
  trackIndex,
  trackList,
  onTrackChange,
  audioRef,
  setDuration,
  duration,
  progressBarRef,
  timeProgress,
  setTimeProgress,
  handleNext,
  handlePrev,
  isPlaying,
  setIsPlaying
}) => {
  // Handles loading the metadata (such as duration) once the audio file is ready
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    if (progressBarRef.current) {
      progressBarRef.current.max = seconds;
    }
  };

  // Handles track end behavior
  const onEnded = () => {
    if (audioRef.current) {
      audioRef.current.pause();  // Pause the audio
      audioRef.current.currentTime = 0;  // Reset the track to the beginning
      setIsPlaying(false);  // Update play/pause state
    }
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

      {/* Section for the Dropdown menu */}
      <Grid item sx={{ width: '100%', padding: '20px 0' }}>
        <FormControl fullWidth>
          <InputLabel 
            id="track-select-label" 
            sx={{ fontWeight: 'bold' }}
          >
            Current Episode:
          </InputLabel>
          <StyledTrackSelect
            labelId="track-select-label"
            id="track-select"
            value={currentTrack.id}
            label="Select Episode"
            onChange={onTrackChange}
          >
            {_.map(trackList, (ep) => (
              <StyledTrackMenuItem
                key={ep.id}
                value={ep.id}
              >
                {"Ep." + ep.id + ": " + ep.epTitle}
              </StyledTrackMenuItem>
            ))}
          </StyledTrackSelect>
        </FormControl>
      </Grid>

      {/* Display Track Section */}
      <Grid item sx={RadioContentDisplay}>
        <DisplayTrack currentTrack={currentTrack} />
      </Grid>

      {/* Progress Bar Section */}
      <Grid item sx={ProgressBarSectionStyle}>
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
          trackIndex={trackIndex}
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
});

export default TrackControlComponent;