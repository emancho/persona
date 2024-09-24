//== React Libs
import React from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';
//== Material UI
import { Typography } from '@mui/material';
//== CSS
import '../App.css';

/*
Component Description:
    DisplayTrack :- Component that represents the Radio Episode Title, Radio Title and Thumbnail of the radio episode
*/

const DisplayTrack = ({
  currentTrack
}) => {

  return (
    <>
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
            <Typography variant="h4" align="center">{currentTrack.title}</Typography>
            <Typography variant="h5" align="center">{'~' + currentTrack.epTitle + '~'}</Typography>
        </div>
      </div>
    </>
  );
};
export default DisplayTrack;