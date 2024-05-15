import React from "react";
//== Material UI
import { Box, Typography } from '@mui/material';

function RadioDisplay( {imgUrl, epTitle, altDescrip} ){

    return(
        <Box>
            <img src={imgUrl} alt={altDescrip} style={{ width: '100%' }} />
            <Typography variant="h4" align="center">{epTitle}</Typography>
        </Box>
    );
}

export default RadioDisplay;