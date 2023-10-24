import React from 'react';
import { CardMedia } from "@mui/material";

function ArtistImage(){
    return(
        <CardMedia
        component="img"
        sx={{ width: 500, height: 500 }}
        image={process.env.PUBLIC_URL + "/images/AboutMeImg.png"}
        alt="My Adorable Face"
      />
    );
}

export default ArtistImage;