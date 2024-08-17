//=== React Lib && CSS
import React from 'react';
import '../App.css';
//== Compontents 
import AnimatedText from '../Components/AnimatedText';
import GridListComponent from '../Components/GridListComponent'
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
//== Material UI
import Typography from '@mui/material/Typography';
//== Data
//== List of projects
import {listOfProjects} from '../ProjectList.js'

// == Description:
// The Projects Page - Location for list of projects I'm working on.

const projCaption = `Welcome to the gallery. Here lays my creative projects of past, present and future.`

const bottomStyle = { 
  marginTop: '20px', 
  backgroundColor: '#e0e0e0', 
  padding: '30px', 
  borderRadius: '4px' 
}


function ProjectsPage() {
  return (
    <WebpageTemplate
      mainContent={<MainContentComponent
        title={
          <AnimatedText 
            title={'The Gallery'}
          />
        }
        topSection={    
          <Typography variant="h6" className="responsive-typography">
            {projCaption}
          </Typography>
          }
        bottomSection={<GridListComponent projectList={listOfProjects}/>}
        bottomStyle={bottomStyle}/>}/>
  );
}

export default ProjectsPage;
