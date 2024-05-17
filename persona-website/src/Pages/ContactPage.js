import React from 'react';
//== Components
import WebPageOutline from '../Components/WebpageOutline'
//== Material UI
import ContactLayout from '../Components/ContactLayout'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'

function ContactPage() {
  return (
    <WebPageOutline
      pageTitle={'Contact Me'}
      pageComponent={
        <BackgroundWrapper children={
          <ContactLayout />}
        />
      }
    />
  );  
}

export default ContactPage;