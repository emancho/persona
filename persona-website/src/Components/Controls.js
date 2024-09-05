//== React Libs
import { 
  useState, 
  useEffect, 
  useRef, 
  useCallback 
} from 'react';
//== Playback icons
import {
IoPlaySkipBackSharp,
IoPlaySkipForwardSharp,
IoPlaySharp,
IoPauseSharp,
} from 'react-icons/io5';

import { CgPlayForwards } from "react-icons/cg";
import { CgPlayBackwards } from "react-icons/cg";

//== Volume icons
import {
IoMdVolumeHigh,
IoMdVolumeOff,
IoMdVolumeLow,
} from 'react-icons/io';
//== Data
import {
  PLAYBACK_BUTTON_SIZE, 
  VOLUME_BUTTON_SIZE
} from '../Constants'
//== Components
import {Box, Grid} from '@mui/material';

/*
Component Description:
  Controls :- Component that represents the controls (Playback and Volume) for the radio page.
*/

const Controls = ({
audioRef,
progressBarRef,
duration,
setTimeProgress,
handleNext,
handlePrev
}) => {
const [isPlaying, setIsPlaying] = useState(false);
const [volume, setVolume] = useState(100);
const [muteVolume, setMuteVolume] = useState(false);

const togglePlayPause = () => {
  setIsPlaying((prev) => !prev);
};

const playAnimationRef = useRef();


// OG Code Behavior
// const repeat = useCallback(() => {
//   if (progressBarRef.current) {
//     const currentTime = audioRef.current ? audioRef.current.currentTime : 0;
//     setTimeProgress(currentTime);
//     progressBarRef.current.value = currentTime;
//     progressBarRef.current.style.setProperty(
//       '--range-progress',
//       `${(progressBarRef.current.value / duration) * 100}%`
//     );
//     playAnimationRef.current = requestAnimationFrame(repeat);
//   }
// }, [audioRef, duration, progressBarRef, setTimeProgress]);

// New Play Button behavior
const repeat = useCallback(() => {
  if (progressBarRef.current) {
    const currentTime = audioRef.current ? audioRef.current.currentTime : 0;

    // Check if the currentTime has reached the duration
    if (currentTime >= duration) {
      // Pause the audio and stop the animation
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
      setIsPlaying(false); // Optionally update the play/pause state
      return; // Exit the function to stop further updates
    }

    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    // Request the next animation frame if the audio is still playing
    playAnimationRef.current = requestAnimationFrame(repeat);
  }
}, [audioRef, duration, progressBarRef, setTimeProgress, setIsPlaying]);


// useEffect relating to the play feature
useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

// useEffect relating to state of volume being muted
useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

return (
  <Grid container direction="column" spacing={2} justifyContent="center">
    <Grid item>
      <Box display="flex" alignItems="center" justifyContent="center">
        {/* Previous Button */}
        <Box mr={5}>
          <button onClick={handlePrev}>
            <CgPlayBackwards size={PLAYBACK_BUTTON_SIZE} />
          </button>
        </Box>

        {/* Play/Pause Button */}
        <Box mr={5}>
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <IoPauseSharp size={PLAYBACK_BUTTON_SIZE} />
            ) : (
              <IoPlaySharp size={PLAYBACK_BUTTON_SIZE} />
            )}
          </button>
          </Box>

        {/* Next Button */}
        <Box>
          <button onClick={handleNext}>
            <CgPlayForwards size={PLAYBACK_BUTTON_SIZE} />
          </button>
        </Box>
      </Box>
    </Grid>

    {/* Mute Button and Volume Slider */}
    <Grid item xs={12} style={{ textAlign: 'center', marginTop: '10px' }}>
      <button onClick={() => setMuteVolume((prev) => !prev)}>
        {muteVolume || volume < 5 ? (
          <IoMdVolumeOff size={VOLUME_BUTTON_SIZE} />
        ) : volume < 40 ? (
          <IoMdVolumeLow size={VOLUME_BUTTON_SIZE} />
        ) : (
          <IoMdVolumeHigh size={VOLUME_BUTTON_SIZE} />
        )}
      </button>
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        style={{
          background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          marginLeft: '10px',
          verticalAlign: 'middle',
        }}
      />
    </Grid>
  </Grid>
);
};

export default Controls;
