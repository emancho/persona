import React from 'react';
import NavBar from '../Components/NavBar';

function AboutPage() {
  return (
    <div>
      <NavBar />
      <img src="your_image_path" alt="About Me" style={{ width: '100px', display: 'block', margin: 'auto' }} />
      <p>Description about yourself here.</p>
    </div>
  );
}

export default AboutPage;
