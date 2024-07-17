import * as React from 'react';
//import Box from '@mui/material/Box';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//-- Description:
/* The data containing the details of a project entry on the projects/gallery page */

/*
    img = The image of the project
    imgTitle = the title associated with the img
    projTitle = The title for the project
    projDesc = The description of the project 
    projAction = The action of the click button 
    projResponse = The response from clicking the button
*/

function ProjectCardComponent({
    minWid = 275,
    img,
    imgTitle,
    projTitle,
    projDesc,
    projAction,
    projResponse 
}) {
    const navigate = useNavigate();
    const handleClick = (redirectPage) => {
        navigate(redirectPage); // This will navigate to the About page
      };

    return (
        <Card sx={{ minWidth: minWid }}>
            <Box border="3px solid #0a3e0a" overflow="hidden">
                <CardMedia
                    sx={{ height: 600 }}
                    image={img}
                    title={imgTitle}
                />
            </Box>
            <CardContent>
                <Typography variant="h3" color="#0a3e0a">{projTitle}</Typography>
                <Typography variant="h6" color="#0a3e0a">{projDesc}</Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleClick(projResponse)}>Check IT!</Button>
            </CardActions>
        </Card>
    );
}
  
export default ProjectCardComponent;
