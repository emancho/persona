import * as React from 'react';
//import Box from '@mui/material/Box';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

function ProjectCardComponent({
    minWid = 275,
    img,
    imgTitle,
    projTitle,
    projDesc
}) {

    // The function for the button
    // Switch: page redirect and message
    const handleButtonClick =( action, actionType )=>{

        switch (action) {
            case 'redirect':
                return actionType;
                break;
            case 'popup':
                return actionType;
                break;
            default:
          }

    } 


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
            <Button size="large">Check IT!</Button>
        </CardActions>
    </Card>
  );
}

export default ProjectCardComponent;
