//=== React Lib && CSS
import React from 'react';
import '../App.css';
//== Compontents 
import ProjectLayout from '../Components/ProjectLayout'
import WebPageOutline from '../Components/WebpageOutline'
import AnimatedText from '../Components/AnimatedText';
//== Material UI
import Typography from '@mui/material/Typography';

// == Description:
// The Projects Page - Location for list of projects I'm working on.
// + pageTitle : the title displayed on the page
// + pageComponent : the Project Layout Compontent

const projCaption = `Welcome to the gallery. Here lays my creative projects of past, present and future.`

function ProjectsPage() {
  return (
    <WebPageOutline
      pageTitle={<AnimatedText 
        title={'The Gallery'}/>
      }
      block = {
        <Typography variant="h6" className="responsive-typography">
          {projCaption}
        </Typography>
      }
      borderObject={<ProjectLayout/>}/>
  );
}

export default ProjectsPage;
