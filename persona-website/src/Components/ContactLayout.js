import React from 'react';
import _ from 'lodash';
//== Components
import HoverableCardMedia from '../Components/HoverableCardMedia'
//== Material UI
import { Button, Typography, Container, Grid, Card } from '@mui/material';

/*
Function: ContactLayout
Description: This is a layout for the contact page
*/

function ContactLayout() {
  return (
    <div id='pageLayout'>
    {/*=== Newletter Section ===*/}           
      {/* Join my Newsletter Title Section */}
      <Container >
          <Typography 
            variant="h3" 
            align="center">
              Join the Newsletter for future updates
          </Typography>
      </Container>

      {/* Subscribe Button Section */}
      <Container sx={{ textAlign: 'center', paddingTop: '15px', paddingBottom: '50px'}}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => window.location.href ='https://forms.gle/vPYRvZFx1ixtdFvp7'}
            style={{ 
              fontSize: '25px', // Larger font size
              padding: '10px 20px' // More padding
            }}
          >
            Subscribe
          </Button>
      </Container>

    {/* === The Section for Social Media Vinyls === */}
    <Container sx={{ padding: '1 0' }}>
      {/*  Section containing the title Typography*/}
        <Typography 
          variant="h3" 
          align="center"
          paddingBottom="10px">
            Social Links
        </Typography>
        {/* The Grid containing the vinyls */}
        <Grid container spacing={4} justifyContent="center">
          {
            _.map(Vinyl_list, (obj) => {
                return (
                    <Grid 
                      item 
                      key={obj.name}>
                        <Card>
                            <HoverableCardMedia
                                name={obj.name} 
                                path={obj.path}
                                altPath={obj.altPath}
                                descipt={obj.descipt}
                                webref={obj.webref}/>
                        </Card>
                    </Grid>
                )
            })
          }
        </Grid>
    </Container>
    </div>
  );
}

// The list of objects where each entry is representing the info of the Vinyls containing my social media
const Vinyl_list = [
    {
        id: 1,
        name: 'Tik Tok', 
        path: process.env.PUBLIC_URL + '/images/tok_vinyl_case_only.png',
        altPath: process.env.PUBLIC_URL + '/images/tok_vinyl.png',
        descipt: 'Tik Tok Vinyl connecting to social media',
        webref: 'https://www.tiktok.com/@edollarsigns'
    }
    ,{
        id:2,
        name: 'Instagram', 
        path: process.env.PUBLIC_URL + '/images/insta_vinyl_case_only.png',
        altPath: process.env.PUBLIC_URL + '/images/insta_vinyl.png',
        descipt: 'Instagram Vinyl connecting to social media',
        webref: 'https://www.instagram.com/ededd_or_eddy'
    }
]

export default ContactLayout;