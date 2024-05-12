import React from "react";
import _ from 'lodash';
//== Material UI
import { 
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar } from '@mui/material';
import MusicNote from '@mui/icons-material/MusicNote';

// subHeader func
const listSubHeader =()=>{
    return(
        <ListSubheader component="div" id="nested-list-subheader">
            Song List
        </ListSubheader>
    )
}

/*
Component -
The list display for the Radio Layout Page. Display a list of songs used in the radio episode.
parameter - 
listOfEpisodes := List of objects which each object consisting on the { song title and artist credit }
*/

function RadioList( {listOfEpisodes} ){

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', subheader: {listSubHeader}}}>
            {
                _.map( listOfEpisodes, ( episode ) => {
                    return(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MusicNote />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={episode.songTitle} secondary={episode.artistCredit} />
                        </ListItem>
                    )
                })
            }
        </List>
    );
}

export default RadioList;