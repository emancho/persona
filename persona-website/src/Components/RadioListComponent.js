//== Libs
import React from "react";
import _ from 'lodash';
//== Material UI
import { 
    Box,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography } from '@mui/material';
import MusicNote from '@mui/icons-material/MusicNote';
// import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import AlbumIcon from '@mui/icons-material/Album';
//== CSS
import '../App.css';

/*
Component Description:
    RadioList :- This component displays the list of songs used in the current radio episode. Using the 
    listOfEpisodes paramter (which is a list of objects { song title and artist credit } )

    handleLogoClick:- The action that will be enacted when the logo on the song list is tapped/clicked on
*/


const handleLogoClick = () => {
    console.log('Logo clicked!');
    // Add your click handler logic here
  };


function RadioList( {listOfEpisodes} ){
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
        {/* The Section above the list contains: play button and `Song List` title */}
            {/* List of Songs in the Radio Show */}
            <List
                sx={{
                width: '100%',
                border: 'solid',
                bgcolor: 'background.paper',
                }}
                subheader={
                <ListSubheader
                    component="div"
                    sx={{
                    textAlign: 'center',
                    fontSize: '36px',
                    backgroundColor: '#f0f0f0',
                    padding: '10px',
                    border: '2px solid #000000',
                    }}
                >
                    Track List
                </ListSubheader>
                }
            >
            {_.map(listOfEpisodes, (episode) => {
            return (
                <ListItem
                    key={episode.id}
                    sx={{
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: '#000000',
                        borderBottom: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                    }}
                >
                    {/*
                        The Section for the Icon next to Song Title and Artist Name
                    */}
                    <ListItemIcon sx={{ marginLeft: 'auto' }}>
                        <IconButton
                            sx={{
                                backgroundColor: '#8DEF61', // Pink background
                                borderRadius: '50%',
                                padding: '10px',
                                '&:hover': {
                                  backgroundColor: '#61EF7C', // Darker pink on hover
                                },
                              }} 
                            onClick={handleLogoClick}>
                                {episode.timeStamp ?
                                <AudiotrackIcon sx={{ color: 'white' }}/> : 
                                <MusicNote sx={{ color: 'BDF8C9' }}/>
                                }
                        </IconButton>
                    </ListItemIcon>
                    
                    {/*
                        The Section for the Song Title and Artist Name
                    */}
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography variant="h5" style={{ color: '#3a3a3a' }}>
                                <strong>{episode.songTitle}</strong>
                            </Typography>
                        }
                        secondary={
                            <Typography variant="subtitle1" style={{ color: '#3a3a3a' }}>
                                 {episode.artistCredit}
                            </Typography>
                        }
                        sx={{
                            paddingLeft: '20px', // Add space on the left side
                          }}
                    />
                </ListItem>
            );
            })}
        </List>
        </Box>
    );
}

export default RadioList;