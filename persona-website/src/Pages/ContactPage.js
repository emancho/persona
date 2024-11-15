//=== React Lib
import React, {useState} from 'react';
import _ from 'lodash';
//== Components
import AnimatedText from '../Components/AnimatedText';
import HoverableCardMedia from '../Components/HoverableCardMedia'
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from '../Components/WebpageTemplate';
import SubscriptionForm from '../Components/SubscriptionForm';
//== Material UI
import { Button, Typography, Container, Grid, Card } from '@mui/material';
//== Constants
import {
  VINYL_LIST
} from '../Constants'

// The styling of the top and bottom sections
const sectionStyle = { 
  marginTop: '20px', 
  backgroundColor: '#e8f0e8', 
  padding: '10px', 
  borderRadius: '4px', 
  border: '2px solid white'
}

// Section for the Newsletter Option
const NewsletterSection = () => {

  const [openForm, setOpenForm] = useState(false); // State to control dialog visibility

  // Function to open the SubscriptionForm dialog
  const handleOpenForm = () => setOpenForm(true);

  // Function to close the SubscriptionForm dialog
  const handleCloseForm = () => setOpenForm(false);

  return (
    <Container sx={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '50px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Join the Newsletter!
      </Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenForm} // Open the form on click
          sx={{
            fontSize: '25px', // Larger font size
            padding: '10px 20px', // More padding
          }}
        >
          Subscribe
        </Button>

        {/* Render the SubscriptionForm dialog if openForm is true */}
        {openForm && (
          <SubscriptionForm open={openForm} onClose={handleCloseForm} />
        )}
      </div>
    </Container>
  );
};

// Section for the vinyls representing my socials
const SocialLinksSection = () => {
  return (
    <Container sx={{ padding: '10px 0' }}>
      {/* Section containing the title Typography */}
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
      >
        Social Links
      </Typography>

      {/* The Grid containing the vinyls */}
      <Grid container spacing={4} justifyContent="center">
        {_.map(VINYL_LIST, (obj) => (
          <Grid item key={obj.name}>
            <Card>
              <HoverableCardMedia
                name={obj.name}
                path={obj.path}
                altPath={obj.altPath}
                descipt={obj.descipt}
                webref={obj.webref}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// == Description:
// The Contact Page - This page is the contact page. This page is where my socials and subscription link is located. 

function ContactPage() {
  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'Contact Me'}/>
          }
          topSection={<NewsletterSection/>}
          topStyle={sectionStyle}
          bottomSection={<SocialLinksSection/>}  
          bottomStyle={sectionStyle}
        />
      }
    />
  );  
}

export default ContactPage;