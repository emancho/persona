import { BsMusicNoteBeamed } from 'react-icons/bs';
import { Typography } from '@mui/material';

/*
Function: DisplayTrack
Component that represents the progress bar of the radio page
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
            <img src={currentTrack.thumbnail} width={500} height={650} alt="audio avatar" />
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