//=== React Lib
import React from "react";
import {Box} from '@mui/material';
//=== Components
import NavBar from '../Components/NavBar';

const WebPageOutline = ({pageTitle, pageComponent })=>{
    return(
        <div>
        <NavBar/>
            {/*== Section for the animated Title ==*/}
            <div>
                {pageTitle}
            </div>
            {/*== The Section for the Webpage content ==*/}
            <Box
                display="flex" // Enables Flexbox
                justifyContent="center" // Centers horizontally
                alignItems="center" // Centers vertically
                >
                <div>{pageComponent}</div>
            </Box>
        </div>
    );
}

export default WebPageOutline