//== Libs
import React, { memo, useMemo } from "react";
//== Material UI
import { 
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Box,
    ListSubheader } from '@mui/material';
import MusicNote from '@mui/icons-material/MusicNote';
//== CSS
import '../App.css';

/*
Component Description:
    RadioList :- This component displays the list of songs used in the current radio episode. Using the 
    listOfEpisodes paramter (which is a list of objects { song title and artist credit } )
*/

// Styles extracted for better performance
const listStyles = {
  width: '100%',
  border: 'solid',
  bgcolor: 'background.paper',
};

const subheaderStyles = {
  textAlign: 'center',
  fontSize: '36px',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  border: '2px solid #000000',
};

const listItemStyles = {
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '#000000',
  borderBottom: 'none',
  borderLeft: 'none',
  borderRight: 'none',
};

// Create a memoized song item component
// In SongItem component
const SongItem = memo(({ episode, onTrackClick, currentTime }) => {
    // Check if this track has a valid timestamp
    const hasTimestamp = typeof episode.timestamp === 'number' && !isNaN(episode.timestamp);
    
    // Only enable click functionality if there's a valid timestamp
    const handleClick = () => {
      if (hasTimestamp && typeof onTrackClick === 'function') {
        onTrackClick(episode.timestamp);
      }
    };
  
    // Determine if this track is currently playing (only if it has a timestamp)
    const isCurrentlyPlaying = hasTimestamp && 
      currentTime >= episode.timestamp && 
      (episode.nextSongTimestamp ? currentTime < episode.nextSongTimestamp : true);
  
    return (
      <ListItem
        key={episode.id}
        sx={{
          ...listItemStyles,
          backgroundColor: isCurrentlyPlaying ? '#e8f4e8' : 'transparent',
        }}
      >
        <ListItemAvatar 
          onClick={hasTimestamp ? handleClick : undefined} // Only add click handler if timestamp exists
          style={{ 
            cursor: hasTimestamp ? 'pointer' : 'default', // Only change cursor if clickable
            transition: hasTimestamp ? 'transform 0.2s' : 'none'
          }}
          className={hasTimestamp ? "track-avatar-hover" : ""}
        >
          <Avatar>
            <MusicNote />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={episode.songTitle}
          secondary={episode.artistCredit}
        />
      </ListItem>
    );
  });

// Memoize the entire RadioList component to prevent unnecessary re-renders

const RadioList = memo(({ listOfEpisodes, onTrackClick, currentTime }) => {
    // Only enhance tracks that have valid timestamps
    const enhancedEpisodes = useMemo(() => {
      // First identify which tracks have timestamps
      const tracksWithTimestamps = listOfEpisodes.filter(
        track => typeof track.timestamp === 'number' && !isNaN(track.timestamp)
      );
      
      // Sort them by timestamp for easier processing
      const sortedTracksWithTimestamps = [...tracksWithTimestamps].sort(
        (a, b) => a.timestamp - b.timestamp
      );
  
      // Now enhance all episodes, adding nextSongTimestamp only for those with timestamps
      return listOfEpisodes.map(episode => {
        // Skip tracks without timestamps
        if (typeof episode.timestamp !== 'number' || isNaN(episode.timestamp)) {
          return episode;
        }
  
        // Find position in sorted timestamp array
        const index = sortedTracksWithTimestamps.findIndex(t => t.id === episode.id);
        
        // Get next timestamp if available
        const nextSongTimestamp = index < sortedTracksWithTimestamps.length - 1 
          ? sortedTracksWithTimestamps[index + 1].timestamp 
          : null;
        
        return {
          ...episode,
          nextSongTimestamp
        };
      });
    }, [listOfEpisodes]);
  
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <List
          sx={listStyles}
          subheader={
            <ListSubheader
              component="div"
              sx={subheaderStyles}
            >
              Track List
            </ListSubheader>
          }
        >
          {enhancedEpisodes.map(episode => (
            <SongItem 
              key={episode.id} 
              episode={episode} 
              onTrackClick={onTrackClick}
              currentTime={currentTime}
            />
          ))}
        </List>
      </Box>
    );
  });

export default RadioList;