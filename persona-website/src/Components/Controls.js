//== React Libs
import { 
  useState, 
  useEffect, 
  useRef, 
  useCallback 
} from 'react';
//== Playback icons
import {
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
import {Box, Grid, Typography} from '@mui/material';

/*
Component Description:
  Controls :- Component that represents the controls (Playback and Volume) for the radio page.
*/

const Controls = ({
  trackIndex,
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  handleNext,
  handlePrev,
  isPlaying,
  setIsPlaying
}) => {
const [volume, setVolume] = useState(100);
const [muteVolume, setMuteVolume] = useState(false);

// The function responsible for swapping between play and pause 
const togglePlayPause = () => {
  setIsPlaying((prev) => !prev);
};

const playAnimationRef = useRef();


// OG Code Behavior
const repeat = useCallback(() => {
  if (progressBarRef.current) {
    const currentTime = audioRef.current ? audioRef.current.currentTime : 0;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }
}, [audioRef, duration, progressBarRef, setTimeProgress]);

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
    <Grid container direction="column" spacing={1} justifyContent="center">
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="center">
        
        {/* Previous Button */}
          <Box mr={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" mb={1} align="center">
              Previous
            </Typography>
            <button onClick={handlePrev} disabled={trackIndex === 0}>
              <CgPlayBackwards size={PLAYBACK_BUTTON_SIZE} />
            </button>
            <Typography variant="body1" mt={1} align="center">
              Episode
            </Typography>
          </Box>

        {/* Play/Pause Button */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <IoPauseSharp size={PLAYBACK_BUTTON_SIZE + 20} />
              ) : (
                <IoPlaySharp size={PLAYBACK_BUTTON_SIZE + 20} />
              )}
            </button>
          </Box>

        {/* Next Button */}
          <Box ml={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" mb={1} align="center">
              Next
            </Typography>
            <button onClick={handleNext}>
              <CgPlayForwards size={PLAYBACK_BUTTON_SIZE} />
            </button>
            <Typography variant="body1" mt={1} align="center">
              Episode
            </Typography>
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
