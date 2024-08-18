//== React
import { 
    useState, 
    useEffect, 
    useRef, 
    useCallback 
} from 'react';
//== CSS
// import '../App.css'
//== Playback icons
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';
//== Volume icons
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
//== Constant
import {
    PLAYBACK_BUTTON_SIZE, 
    VOLUME_BUTTON_SIZE,
    RADIO_EPS
} from '../Constants'
//== Components
import {Box, Grid} from '@mui/material';

/*
Function: Controls
Description: Component that represents the controls (Playback and Volume) for the radio page
*/

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  setCurPlaylistState
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

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
  

  // Func relating to behavior of selecting the previous track
  const handlePrevious = () => {
    if (trackIndex === 0) {
        let lastTrackIndex = tracks.length - 1;
        setTrackIndex(lastTrackIndex);
        setCurrentTrack(tracks[lastTrackIndex]);
        setCurPlaylistState(RADIO_EPS[lastTrackIndex]);
    } else {
        setTrackIndex((prev) => prev - 1);
        setCurrentTrack(tracks[trackIndex - 1]);
        setCurPlaylistState(RADIO_EPS[trackIndex - 1])
    }
  };

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
            <button onClick={handlePrevious}>
              <IoPlaySkipBackSharp size={PLAYBACK_BUTTON_SIZE} />
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
              <IoPlaySkipForwardSharp size={PLAYBACK_BUTTON_SIZE} />
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