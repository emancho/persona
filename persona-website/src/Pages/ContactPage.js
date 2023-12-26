import React from 'react';
import NavBar from '../Components/NavBar';
import { AppBar, Toolbar, Button, Typography, Container, Grid, Card, 
  CardActionArea, CardMedia, CardContent } from '@mui/material';
// Imported Images
import tt_vinyl from '../Images/tok_vinyl.png';
import insta_vinyl from '../Images/insta_vinyl.png';
import tt_vinyl_case from '../Images/tok_vinyl_case_only.png';
import insta_vinyl_case from '../Images/insta_vinyl_case_only.png';


function ContactPage() {
  return (
    <>
      {/* Navbar Section */}
      <NavBar />
      {/* Contact Me Title Section */}
      <Container style={{ padding: '2rem 0' }}>
        <Typography variant="h2" align="center">Contact Me</Typography>
      </Container>

      {/* Clickable Images Section */}
      <Container style={{ padding: '2rem 0' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Card>
              <CardActionArea onClick={() => console.log('Image 1 clicked')}>
                <CardMedia
                  component="img"
                  image={insta_vinyl}
                  alt="Description of Image 1"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea onClick={() => console.log('Image 2 clicked')}>
                <CardMedia
                  component="img"
                  image={tt_vinyl}
                  alt="Description of Image 2"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Join my Newsletter Title Section */}
      <Container style={{ padding: '2rem 0' }}>
        <Typography variant="h2" align="center">Join my Newsletter</Typography>
      </Container>

      {/* Subscribe Button Section */}
      <Container style={{ padding: '2rem 0', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => console.log('Subscribe button clicked')}>
          Subscribe
        </Button>
      </Container>
    </>
  );
}

export default ContactPage;