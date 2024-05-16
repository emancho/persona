import { useRef, useState } from 'react';
import { episodes } from '../data/episodes';

//== Components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import RadioList from './RadioListComponent'

//== Constant
import {RADIO_EPS} from '../Constants'

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    episodes[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();
  const listEpisodeObjects = RADIO_EPS

  const handleNext = () => {
    if (trackIndex >= episodes.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(episodes[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(episodes[trackIndex + 1]);
    }
  };

  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              episodes,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
        <RadioList listOfEpisodes={listEpisodeObjects[0].radioTrackList}/>
      </div>
    </>
  );
};
export default AudioPlayer;