import React from 'react';
import { Box, Stack } from '@mui/material';

//=== Components
import NaviList from '../Components/NaviList';
import ArtistBar from '../Components/TitleBar'
import ArtistImg from '../Images/test_img.png'


function PlaylistPage() {
  return (
   <div>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {/* Image of self */}
        <ArtistImg/>
        {/* The Title of who I am */}
        <ArtistBar/>
        {/* The list of pages to navigate, ex: song selection on playlist */}
        <NaviList />
      </Stack>
    </Box>
   </div>
  );
}

export default PlaylistPage;