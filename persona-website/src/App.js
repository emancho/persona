// Libraries 
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// Components
import NavButtons from './Components/NavButtons';
import ArtistImage from './Components/ArtistImage'
import ArtistTitle from './Components/ArtistTitle'
//Pages
import AboutMePage from './Pages/AboutMePage';

// App - The Homepage containing the Playlist style profile
// Uses Material UI to Layer the sections and design the page

function App() {

  return (
    <Router>
      <Switch>
        {/* Render to 'About Me' Page */}
        <Route exact path="/" component={HomePage} />
        <Route exact path='/AboutMe' component={AboutMePage} />
      </Switch>
  </Router>
  );
}

function HomePage(){
  
  return(
    <div id={'HomePageDomain'}>
    {/* // This is the section where I have my page layout */}
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          {/* This section is the Title and Artist Namne */}
          <ArtistTitle/>
          {/* This section is the music image */}
          <ArtistImage/>
        {/* This section is the play song buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <NavButtons/>
          </Box>
        </Box>
      </Card>
   </div>
  );
}



export default App;
