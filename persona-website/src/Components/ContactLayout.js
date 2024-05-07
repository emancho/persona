import React from 'react';
import _ from 'lodash';
//== Components
import HoverableCardMedia from '../Components/HoverableCardMedia'
//== Material UI
import { Button, Typography, Container, Grid, Card } from '@mui/material';

function ContactLayout() {
  return (
    <div id='pageLayout'>
    {/*=== The Section for Social Media Vinyls ===*/}
    <Container style={{ padding: '2rem 0' }}>
        <Grid container spacing={4} justifyContent="center">
        {
            _.map(Vinyl_list, (obj) => {
                return (
                    <Grid item>
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
        };
        </Grid>
    </Container>

    {/*=== Newletter Section ===*/}           
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
    </div>
  );
}

// The list of Vinyls added to the Contact Page
const Vinyl_list = [
    {
        id:1,
        name:'Tik Tok', 
        path:process.env.PUBLIC_URL + '/images/tok_vinyl_case_only.png',
        altPath:process.env.PUBLIC_URL + '/images/tok_vinyl.png',
        descipt:'Tik Tok Vinyl connecting to social media',
        webref:'https://www.tiktok.com/@edollarsigns'
    }
    // ,{
    //     id:2,
    //     name:'Instagram', 
    //     path:process.env.PUBLIC_URL + '/images/insta_vinyl_case_only.png',
    //     altPath:process.env.PUBLIC_URL + '/images/insta_vinyl.png',
    //     descipt:'Instagram Vinyl connecting to social media',
    // }
]

export default ContactLayout;