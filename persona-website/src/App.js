//== React Libraries 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//== Pages
import HomePage from './Pages/HomePage.js';
import AboutMePage from './Pages/AboutPage.js';
import ContactPage from './Pages/ContactPage.js';
import ProjPage from './Pages/ProjectsPage.js';
import RadioPage from './Pages/RadioPage.js';

// == Description:
// Consist of a layout similar to a music player containing a 
// profile picture, artist name and button options that navigate to other pages. 

function App() {
// The Routes of the entire website
  return (
        <Router>
          <Routes>
            {/* Render to Homepage Page */}
            <Route path="/" element={<HomePage />} />
            {/* Render to 'About Me' Page */}
            <Route path='/aboutMe' element={<AboutMePage />} />
            {/* Render to 'Contact' Page */}
            <Route path='/contact' element={<ContactPage />} />
            {/* Render to 'Projects' Page */}
            <Route path='/projects' element={<ProjPage />} />
            {/* Render to 'Projects' Page */}
            <Route path='/radioPage' element={<RadioPage />} />
            {/*==Wildcard Route ==*/}
            {/* Redirects to Homepage when an invalid path is entered */}
            <Route path="*" element={<HomePage />} />     
          </Routes>
    </Router>
  );
}

export default App;
