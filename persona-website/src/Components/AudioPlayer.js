//=== React Lib && CSS
import { useRef, useState } from 'react';
import { episodes } from '../data/episodes';
import '../App.css';
//== Material UI
import { 
  Box, 
  Grid 
} from '@mui/material';
//== Components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import RadioList from './RadioListComponent'
//== Constant
import {RADIO_EPS} from '../Constants'

/*
Function: AudioPlayer
Description: This is the layout of the Audio Player consisting of the Controls, Progress Bar and Display Track 
*/

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(episodes[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [curTrackList, setCurTrackList] = useState(RADIO_EPS[0])
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const handleNext = () => {
    if (trackIndex >= episodes.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(episodes[0]);
      setCurTrackList(RADIO_EPS[0])
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(episodes[trackIndex + 1]);
      setCurTrackList(RADIO_EPS[trackIndex + 1])
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        style={{ minHeight: '100vh', padding: '20px' }}>
        {/*== Section for Display Track ==*/}
          <Grid item id={"displaytrack_section"}>
            <DisplayTrack
            currentTrack={currentTrack}
            audioRef={audioRef}
            setDuration={setDuration}
            progressBarRef={progressBarRef}
            handleNext={handleNext}/>
          </Grid>
        {/*== Section for the Progress Bar ==*/}
          <Grid item id={"progressBar_section"}>
            <ProgressBar
              progressBarRef={progressBarRef}
              audioRef={audioRef}
              timeProgress={timeProgress}
              duration={duration}/>
          </Grid>
        {/*== Section for Radio Controls ==*/}
          <Grid item id={"radioControl_section"}>
            <Controls
                audioRef={audioRef}
                progressBarRef={progressBarRef}
                duration={duration}
                setTimeProgress={setTimeProgress}
                tracks={episodes}
                trackIndex={trackIndex}
                setTrackIndex={setTrackIndex}
                setCurrentTrack={setCurrentTrack}
                handleNext={handleNext}
                setCurPlaylistState={setCurTrackList}/>
          </Grid>
          {/* Section for the List of Songs associated with the radio episode */}
          <Grid item>
            <RadioList listOfEpisodes={curTrackList.radioTrackList}/>
          </Grid>
        </Grid>
    </Box> 
  );
};
export default AudioPlayer;