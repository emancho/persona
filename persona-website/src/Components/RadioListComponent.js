//== Libs
import React from "react";
import _ from 'lodash';
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
                <ListItemAvatar>
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
            })}
        </List>
        </Box>
    );
}

export default RadioList;