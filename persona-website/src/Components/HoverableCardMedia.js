import React, { useState } from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';


/*
Function: HoverableCardMedia
Description: Component used for the Contact Layout
*/

function HoverableCardMedia({name, path, altPath, descipt, webref}) {
  // Used to track the state of card to be hovered 
  const [isHovered, setIsHovered] = useState(false);

  return (
      <Grid container spacing={4} justifyContent="center">
        {/* Single Card */}
        <Grid item>
          <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardActionArea onClick={() => {window.location.href = webref} }>
              <CardMedia
                component="img"
                image={isHovered 
                        ? altPath  // Image when hovered
                        : path } // Default image
                alt={descipt}
                sx={{ height: 240, width: 240 }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
}

export default HoverableCardMedia;
