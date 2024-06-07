import React from 'react';
import '../App.css';
//== Compontents 
import ProjectLayout from '../Components/ProjectLayout'
import WebPageOutline from '../Components/WebpageOutline'
import AnimatedText from '../Components/AnimatedText';

// == Description:
// The Projects Page - Location for list of projects I'm working on.
// The pageTitle is the Title displayed on the page
// The pageComponent is the Project Layout Compontent

function ProjectsPage() {
  return (
    <WebPageOutline
      pageTitle={<AnimatedText 
        title={'The Gallery'}/>
      }
      pageComponent={<ProjectLayout/>}/>
  );
}

export default ProjectsPage;
