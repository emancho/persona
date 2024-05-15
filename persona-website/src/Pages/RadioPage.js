import React from 'react';
import '../App.css';
//== Compontents 
import WebPageOutline from '../Components/WebpageOutline'
import RadioLayout from '../Components/RadioPageLayout'

function RadioPage() {
  return (
    <WebPageOutline
      pageTitle={'EDDperience Radio'}
      pageComponent={<RadioLayout/>}
      />
  );
}

export default RadioPage;
