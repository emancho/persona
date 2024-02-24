import React from 'react';
//== Components
import NavBar from '../Components/NavBar';
import HoverableCardMedia from '../Components/HoverableCardMedia'
//== Material UI
import { Button, Typography, Container, Grid, Card } from '@mui/material';

function ContactPage() {
  return (
    <>
      {/* Navbar Section */}
      <NavBar />
      {/* Contact Me Title Section */}
      <Container style={{ padding: '2rem 0' }}>
        <Typography variant="h2" align="center">Contact Me</Typography>
      </Container>

      {/* Adding blue border */}
        {/* Clickable Images Section */}
        <Container style={{ padding: '2rem 0' }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Card>
                <HoverableCardMedia
                  name={'Instagram'} 
                  path={process.env.PUBLIC_URL + '/images/insta_vinyl_case_only.png'}
                  altPath={process.env.PUBLIC_URL + '/images/insta_vinyl.png'}
                  descipt={'Instagram Vinyl connecting to social media'}
                  webref={'https://www.instagram.com/ededd_or_eddy/'}
                />
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <HoverableCardMedia
                    name={'Tik Tok'} 
                    path={process.env.PUBLIC_URL + '/images/tok_vinyl_case_only.png'}
                    altPath={process.env.PUBLIC_URL + '/images/tok_vinyl.png'}
                    descipt={'Tik Tok Vinyl connecting to social media'}
                    webref={'https://www.tiktok.com/@edollarsigns'}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>

      {/* Join my Newsletter Title Section */}
      <Container style={{ padding: '2rem 0' }}>
        <Typography variant="h2" align="center">Join my Newsletter</Typography>
      </Container>

      {/* Subscribe Button Section */}
      <Container style={{ padding: '1rem 0', textAlign: 'center' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.href ='https://forms.gle/vPYRvZFx1ixtdFvp7'}
          style={{ 
            fontSize: '30px', // Larger font size
            padding: '10px 20px' // More padding
          }}
        >
          Subscribe
        </Button>
      </Container>
    </>
  );
}

export default ContactPage;