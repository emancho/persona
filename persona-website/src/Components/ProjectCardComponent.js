import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Box, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
//-- Description:
/* The data containing the details of a project entry on the projects/gallery page */

/*
    img = The image of the project
    imgTitle = the title associated with the img
    projTitle = The title for the project
    projDesc = The description of the project 
    projAction = The action of the click button 
    projResponse = The details of the project entry with more details of the proj
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
    const [message, setMessage] = useState(projDesc);
    const [buttonMessage, setButtonMessage] = useState('Check it OUT!')

    const handleClick =()=> {
        setMessage((prevMessage) => (prevMessage === projDesc ? projResponse : projDesc));
        setButtonMessage(buttonMessage === 'Check it OUT!' ? 'Back' : 'Check it OUT!');
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
            <Box border="3px solid #0a3e0a" overflow="hidden">
                <CardMedia
                    sx={{ height: 600}}
                    image={img}
                    title={imgTitle}
                />
            </Box>
            <CardContent>
                <Typography variant="h3" color="#0a3e0a">{projTitle}</Typography>
                <Typography variant="h6" color="#0a3e0a">{message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={clickAction(projAction)}>{buttonMessage}</Button>
            </CardActions>
        </Card>
    );
}
  
export default ProjectCardComponent;
