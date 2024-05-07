import React from 'react';
import '../App.css';
//== Compontents 
import ProjectLayout from '../Components/ProjectLayout'
import WebPageOutline from '../Components/WebpageOutline'

function ProjectsPage() {
  return (
    <WebPageOutline
      pageTitle={'The Gallery'}
      pageComponent={<ProjectLayout/>}/>
  );
}

export default ProjectsPage;
