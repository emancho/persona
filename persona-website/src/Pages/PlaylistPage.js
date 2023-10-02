import React from 'react';
import { Router,Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/FastRewind';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/FastForward';


function PlaylistPage() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {/* This section is the Title and Artist Namne */}
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            The Journey of an Artist
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Ed___d w/o the war
          </Typography>
        </CardContent>
        {/* This section is the music image */}
        <CardMedia
          component="img"
          sx={{ width: 300, height: 300 }}
          image={process.env.PUBLIC_URL + "/images/sample_profile.png"}
          alt="Live from space album cover"
        />
        {/* This section is the play song buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
        {/*End section for buttons*/}
      </Box>
      {/*End section of outter Box*/}
    </Card>
  );
}

export default PlaylistPage;