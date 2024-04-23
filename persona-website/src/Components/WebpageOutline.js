//=== React Lib
import React from "react";
import {Box, Typography} from '@mui/material';
//=== Components
import NavBar from '../Components/NavBar';

const WebPageOutline = ({pageTitle, pageComponent })=>{
    return(
        <div>
        <NavBar />
        <div className="centered-typography">
            <Typography variant="h2" color="#0a3e0a" >{pageTitle}</Typography>
        </div>
        <Box
            display="flex" // Enables Flexbox
            justifyContent="center" // Centers horizontally
            alignItems="center" // Centers vertically
            height="80vh" // Full viewport height
            >
            <div>{pageComponent}</div>
        </Box>
      </div>
    );
}

export default WebPageOutline