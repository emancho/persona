import React from "react";
import _ from 'lodash';
//== Material UI
import { 
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Box } from '@mui/material';
import MusicNote from '@mui/icons-material/MusicNote';
//== Stlying
import '../App.css';

/*
Component -
The list display for the Radio Layout Page. Display a list of songs used in the radio episode.
parameter - 
listOfEpisodes := List of objects which each object consisting on the { song title and artist credit }
*/

function RadioList( {listOfEpisodes} ){
    // console.log('== RadioList ==');

    return (
        <div>
            {/*== The Section above the list contains: play button and `Song List` title ==*/}
            <Box>

            </Box>
            {/*==  List of Songs in the Radio Show ==*/}
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}> 
                {
                    _.map( listOfEpisodes, ( episode ) => {
                        return(
                            <ListItem
                            sx={{
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: '#000000'
                            }}>
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
        </div>
    );
}

export default RadioList;