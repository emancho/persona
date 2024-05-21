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
//== Stlying
import '../App.css';

/*
Component -
The list display for the Radio Layout Page. Display a list of songs used in the radio episode.
parameter - 
listOfEpisodes := List of objects which each object consisting on the { song title and artist credit }
*/

function RadioList( {listOfEpisodes} ){
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            {/*== The Section above the list contains: play button and `Song List` title ==*/}
            
            {/*==  List of Songs in the Radio Show ==*/}
            <List sx={{ 
                width: '100%',
                minWidth: 400, 
                maxWidth: 600,
                border: 'solid',
                bgcolor: 'background.paper'}}
                subheader={
                    <ListSubheader 
                        component="div" 
                        sx={{ // Add styling for subheader
                            textAlign: 'center',
                            fontSize: '36px',
                            backgroundColor: '#f0f0f0', 
                            padding: '10px',
                            border: '2px solid #000000'
                        }}
                    >
                        Track List
                    </ListSubheader>
                }>
                {
                    _.map( listOfEpisodes, ( episode ) => {
                        return(
                            <ListItem
                                key={episode.id}
                                sx={{
                                    borderStyle: 'solid',
                                    borderWidth: '2px',
                                    borderColor: '#000000',
                                    borderBottom: 'none',
                                    borderLeft:'none',
                                    borderRight: 'none',
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
        </Box>
    );
}

export default RadioList;