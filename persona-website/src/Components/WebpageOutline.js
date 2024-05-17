//=== React Lib
import React from "react";
import {Box,Typography} from '@mui/material';
//=== Components
import NavBar from '../Components/NavBar';

const WebPageOutline = ({pageTitle, pageComponent })=>{
    return(
        <div>
        <NavBar/>
            <div>
                <Typography variant="h2" 
                sx={{ 
                    textAlign: 'center', 
                    marginTop: '15px',
                    marginBottom: '25px', 
                    color: '#0a3e0a',
                    fontStyle: 'italic', // Italic font style
                    fontWeight: 'bold',  // Bold font weight
                    fontFamily: 'Arial, sans-serif' // Custom font family
                }}>
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