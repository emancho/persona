import React from 'react';
//== Components
import WebPageOutline from '../Components/WebpageOutline'
//== Material UI
import ContactLayout from '../Components/ContactLayout'

function ContactPage() {
  return (
    <WebPageOutline
      pageTitle={'Contact Me'}
      pageComponent={<ContactLayout />}
    />
  );  
}

export default ContactPage;