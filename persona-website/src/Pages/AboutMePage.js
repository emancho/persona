import * as React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ArtistImage from '../Components/ArtistImage';
import ArtistTitle from '../Components/ArtistTitle';

function AboutMePage() {
  return (
    < WebpageLayout/>
  );
}

function WebpageLayout() {
  let img = "/images/AboutMeImg.png"

  return (

      <div>
        <Stack spacing={2}>
            <ArtistImage url_route={img} />
            <ArtistTitle/>

            <Typography variant="body1" paragraph>
                At a young age, I wanted to be alot of things...An inventor, scienist, artist, comic book artist, movie director and author. 
                Before high school I already created a few comics, wrote a rough draft for a fantasy novel, and created a rough draft screenplay 
                ( even tho HEAVILY based on Star Wars) because I like creating things, especially for other people to enjoy. As the years passed,
                I did less creating and focused more on my academia. This lead to me graduating college and becoming a software engineer.
            </Typography>
        </Stack>
      </div>
      
  );
  }

export default AboutMePage;