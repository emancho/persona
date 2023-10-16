import React from 'react';
import { CardMedia } from "@mui/material";

function ArtistImage(){
    return(
        <CardMedia
        component="img"
        sx={{ width: 300, height: 300 }}
        image={process.env.PUBLIC_URL + "/images/sample_profile.png"}
        alt="Live from space album cover"
      />
    );
}

export default ArtistImage;