import React from 'react';
import NavBar from '../Components/NavBar';

function ContactPage() {
  return (
    <div>
      <NavBar />
      <h1>Socials</h1>
      {/* Add your clickable images here */}
      <button style={{ borderRadius: '5px' }}>Join my newsletter</button>
    </div>
  );
}

export default ContactPage;
