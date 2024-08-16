import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const gridContainerStyles = {
    minHeight: '100vh',        // Ensures the Grid container takes up at least the full height of the viewport (100% of the viewport height)
    display: 'flex',           // Sets the Grid container to use Flexbox for layout, enabling flexible alignment and distribution of its child elements
    flexDirection: 'column',   // Arranges the child elements of the Grid container in a vertical column (from top to bottom)
};

const headerStyles = {
    width: '100%',              // Ensures the header spans the full width of its container
    padding: '20px',            // Adds 20px of padding inside the header to create space around its content
    backgroundColor: '#3f51b5', // Sets the background color of the header to a dark blue (#3f51b5)
    color: '#fff',              // Sets the text color inside the header to white (#fff) for contrast against the dark background
    textAlign: 'center',        // Centers the text horizontally within the header
};

const footerStyles = {
    width: '100%',              // Ensures the footer spans the full width of its container
    padding: '10px',            // Adds 10px of padding inside the footer to create space around its content
    backgroundColor: '#3f51b5', // Sets the background color of the footer to a dark blue (#3f51b5)
    color: '#fff',              // Sets the text color inside the footer to white (#fff) for contrast against the dark background
    textAlign: 'center',        // Centers the text horizontally within the footer
    marginTop: 'auto',          // Pushes the footer to the bottom of its container, ensuring it stays at the bottom of the page
};

const mainContentStyles = {
    padding: '20px',               // Adds 20px of padding inside the content area to create space around its content
    backgroundColor: '#f5f5f5',    // Sets the background color of the content area to a light gray (#f5f5f5)
    borderRadius: '10px',          // Rounds the corners of the content area with a radius of 10px for a softer look
    width: {
        xs: '100%',                // 100% width on extra-small screens (phones)
        sm: '70%',                 // 70% width on small screens
        md: '70%',                 // 70% width on medium and larger screens
    },
    maxWidth: '800px',             // Limits the maximum width of the content area to 800px, preventing it from becoming too wide on larger screens
    boxSizing: 'border-box',       // Ensures that the padding is included in the width calculation, preventing overflow
    textAlign: 'center',           // Centers the text horizontally within the content area
    margin: '0 auto',              // Centers the content area horizontally within its parent container by applying equal left and right margins
    display: 'flex',               // Sets the content area to use Flexbox for layout, enabling flexible alignment and distribution of its child elements
    flexDirection: 'column',       // Arranges the child elements inside the content area in a vertical column (from top to bottom)
    justifyContent: 'center',      // Vertically centers the content within the content area
};


const WebpageTemplate = ({mainContent}) => {
    return (
        <>
        <Grid container sx={gridContainerStyles}>
            {/*=== Header ===*/}
            <Grid item xs={12}>
                <Box sx={headerStyles}>
                    <Typography variant="h4">Welcome to my Creative Mind</Typography>
                </Box>
            </Grid>

            {/*=== Main Content Segment ===*/}
            <Grid 
                container 
                spacing={2} 
                sx={{ 
                    flex: 1, 
                    padding: '20px', 
                    justifyContent: 'center',  // Center content horizontally within the grid
                    alignItems: 'center',      // Center content vertically within the grid
                }}
            >
                <Grid item xs={12} md={8}>
                    <Box sx={mainContentStyles}>
                        {mainContent}
                    </Box>
                </Grid>
            </Grid>

            {/*=== Footer Segment ===*/}
            <Grid item xs={12}>
                <Box sx={footerStyles}>
                    <Typography variant="body1">Coded By: Ed__d w/o the War</Typography>
                </Box>
            </Grid>
        </Grid>
    </>
    );
}

export default WebpageTemplate;
