import React from 'react';
//== Material UI
import Stack from '@mui/material/Stack';
//== Components
import RadioList from '../Components/RadioListComponent'
//import RadioDisplay from '../Components/RadioDisplayComponent'
//== Constant
import {RADIO_EPS} from '../Constants'

/*
Layout -
Main layout for the Radio Page.
Displays Image/Title, the rotation button and list of songs contained in the episode 
*/

function RadioPageLayout() {
    // The list of objects containing the episode details
    const listEpisodeObjects = RADIO_EPS
    // console.log('The list of episode objects :--> ' + JSON.stringify(listEpisodeObjects))

    return(
        <Stack direction="row" spacing={2}>
            {/* <RadioDisplay epTitle='Eddperience Ep1'/> */}
            <RadioList listOfEpisodes={listEpisodeObjects[0].radioTrackList}/>
        </Stack>
    );
}


export default RadioPageLayout;