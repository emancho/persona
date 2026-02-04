//== React Libs
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
//== Material UI
import { Card, Box, CardMedia, CardContent, Typography, CardActions, Button, Stack } from '@mui/material';

/*
Component Description:
    ProjectCardComponent :- This component displays the data containing the details of a project
     entry on the projects page. Also responsible for the feature that allows users to see author
     notes of a project or redirect to another webpage.
*/

function ProjectCardComponent({
    minWid = 275,
    img,
    projTitle,
    projDesc,
    projAction,
    projResponse 
}) {
    const navigate = useNavigate();
    const [message, setMessage] = useState(projDesc);
    const [buttonMessage, setButtonMessage] = useState('MORE')

    const handleClick =()=> {
        setMessage((prevMessage) => (prevMessage === projDesc ? projResponse : projDesc));
        setButtonMessage(buttonMessage === 'MORE' ? 'Back' : 'MORE');
    };

    const handleRedirect =()=> {
        navigate('/radioPage')
    };

    const clickAction =(projAction)=>{
        if(projAction === 'REDIRECT'){
            return handleRedirect;
        }else{
            return handleClick;
        }
    }

    return (

        <Card sx={{ minWidth: minWid }}>
            <Box border="3px solid #000000" overflow="hidden">
            <CardMedia
                sx={{
                    position: 'relative',
                    width: '100%',          // The image takes up 100% of the container's width
                    paddingTop: '107%',     // Height is set to maintain the 478x511 aspect ratio (511 / 478 ≈ 1.07)
                    overflow: 'hidden',     // Ensures no overflow occurs
                }}
                component="div"          // Changing the component to 'div' for using a background image style
                >
                <Box
                    sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${img})`, // Using the image as a background
                    backgroundSize: 'cover',       // Ensures the image covers the entire area without distortion
                    backgroundPosition: 'center',  // Centers the image
                    }}
                />
            </CardMedia>
            </Box>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h4" color="#000000" sx={{ textDecoration: 'underline' }}>{projTitle}</Typography>
                    <Typography variant="body1" color="#000000">{message}</Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={clickAction(projAction)}>{buttonMessage}</Button>
            </CardActions>
        </Card>
    );
}
  
export default ProjectCardComponent;
