//== React
import { 
    useState, 
    useEffect, 
    useRef, 
    useCallback 
} from 'react';

//== Icons
//= Playback icons
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';
//= Volume icons
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';


/*
Function: Controls
Component that represents the controls (Playback and Volume) for the radio page
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
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
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
  
  // useEffect relating to the play feature
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  // Func relating to behavior of selecting the previous track
  const handlePrevious = () => {
    console.log('=== CONTROL FUNCTION ===')

    if (trackIndex === 0) {
        console.log('CONTROL FUNCTION: index is indexed @ 0');
        let lastTrackIndex = tracks.length - 1;
        console.log('The index of the last track is: ' + lastTrackIndex );
        setTrackIndex(lastTrackIndex);
        setCurrentTrack(tracks[lastTrackIndex]);
    } else {
        setTrackIndex((prev) => prev - 1);
        setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  // useEffect relating to state of volume being muted
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="controls-wrapper">
        {/*=== playback control section ===*/}
      <div className="controls">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
        {/*=== volume section ===*/}
      <div className="volume">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff />
          ) : volume < 40 ? (
            <IoMdVolumeLow />
          ) : (
            <IoMdVolumeHigh />
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
          }}
        />
      </div>
    </div>
  );
};

export default Controls;