import React from 'react';
//== Components
import AudioPlayer from './AudioPlayer';
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'

/*
Layout -
Main layout for the Radio Page.
*/

function RadioPageLayout() {
    return(
        <div>
            <BackgroundWrapper children={<AudioPlayer />}/>
        </div>
    );
}


export default RadioPageLayout;