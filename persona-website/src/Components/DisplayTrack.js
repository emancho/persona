import { BsMusicNoteBeamed } from 'react-icons/bs';
import { Typography } from '@mui/material';
import '../App.css';

/*
Function: DisplayTrack
Component that represents the Radio Episode Title, Radio Title and Thumbnail of the radio episode
*/

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt={currentTrack.alt} />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="episode_listing">
            <Typography variant="h4" align="center">{'eddPerience Radio ' + currentTrack.title}</Typography>
            <Typography variant="h5" align="center">{'~' + currentTrack.epTitle + '~'}</Typography>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;