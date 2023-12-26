//== Libraries 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//== Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//== Components
import NavButtons from './Components/NavButtons';
import ArtistImage from './Components/ArtistImage'
import ArtistTitle from './Components/ArtistTitle'
//== Pages
import AboutMePage from './Pages/AboutPage.js';
import ContactPage from './Pages/ContactPage.js'
import ProjPage from './Pages/ProjectsPage.js'

// Description:
//   Displays the homepage. Consist of a layout similar to a music player containing a 
//   profile picture, artist name and button options that navigate to other pages. 
// ** Uses Material UI for design and display options.

function App() {

  return (
        <Router>
          <Routes>
            {/* Render to Homepage Page */}
            <Route path="/" element={<HomePage />} />
            {/* Render to 'About Me' Page */}
            <Route path='/aboutme' element={<AboutMePage />} />
            {/* Render to 'Contact' Page */}
            <Route path='/contact' element={<ContactPage />} />
            {/* Render to 'Projects' Page */}
            <Route path='/projects' element={<ProjPage />} />     
          </Routes>
    </Router>
  );
}

function HomePage(){
  
  return(
    <div id={'HomePageDomain'}>
      {/* // This is the section where I have my homepage layout */}
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
