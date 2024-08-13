//=== React Lib
import React from 'react';
//== Components
import WebPageOutline from '../Components/WebpageOutline'
import AnimatedText from '../Components/AnimatedText';
import ContactLayout from '../Components/ContactLayout'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'

// == Description:
// The Contact Page - Location for my socials and the where users can subscribe
// + pageTitle: the title displayed on the page
// + pageComponent: the Contact Layout Compontent that is wrapped around a border

function ContactPage() {
  return (
    <WebPageOutline
      pageTitle={<AnimatedText 
        title={'Contact Me'}/>
      }
      borderObject={
        <BackgroundWrapper children={
          <ContactLayout />}
        />
      }
    />
  );  
}

export default ContactPage;