import React from 'react';
import { CardMedia } from "@mui/material";

function ArtistImage({path, altDesc, w, h}){
    return(
        <CardMedia
        component="img"
        sx={{ width: w ,height: h }}
        image={process.env.PUBLIC_URL + path}
        alt={altDesc}
      />
    );
}

export default ArtistImage;