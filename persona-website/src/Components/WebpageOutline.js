//=== React Lib
import React from "react";
import {Box,Container,Typography} from '@mui/material';
//=== Components
import NavBar from '../Components/NavBar';

const WebPageOutline = ({pageTitle, pageComponent })=>{
    return(
        <div>
        <NavBar/>
            <div>
                <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '30px', color: '#0a3e0a'}}>
                    {pageTitle}
                </Typography>
            </div>
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