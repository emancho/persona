//== Libraries 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//== Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// Icon buttons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext'; 
import SkipPrevIcon from '@mui/icons-material/SkipPrevious'
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
// The Routes of the entire website
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

            {/*==Wildcard Route ==*/}
            <Route path="*" element={<HomePage />} />     
          </Routes>
    </Router>
  );
}

function HomePage() {
  const buttons = [
    { icon: SkipPrevIcon, link: '/contact' },
    { icon: PlayArrowIcon, link: '/aboutme' },
    { icon: SkipNextIcon, link: '/projects' },
  ];

  return (
    <div id="HomePageDomain" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
    }}>
      {/*== This is the section where I have my homepage layout */}
      <Card sx={{
          maxWidth: 345,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
          padding: '20px'
        }}>
        {/* This section is the profile image */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <ArtistImage />
        </Box>
        {/* This section is the Title and Artist Name */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <ArtistTitle />
        </Box>
        {/* This section is the navigation buttons */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <NavButtons buttonData={buttons}/>
        </Box>
      </Card>
    </div>
  );
}

export default App;
