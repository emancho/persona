//=== React Lib
import React from 'react';
import _ from 'lodash';
//== Components
import AnimatedText from '../Components/AnimatedText';
import HoverableCardMedia from '../Components/HoverableCardMedia'
import WebPageOutline from '../Components/WebpageOutline'
import BorderWrapper from '../Components/BorderWrapperComponent';
//== Material UI
import { Button, Typography, Container, Grid, Card } from '@mui/material';
//== Constants
import {
  VINYL_LIST
} from '../Constants'

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
        <BorderWrapper 
        topBlock={
          <div>
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
          </div>
        }
        bottomBlock={
          <div>
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
                  _.map(VINYL_LIST, (obj) => {
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
        }
        spacing={3}/>
      }
    />
  );  
}

export default ContactPage;