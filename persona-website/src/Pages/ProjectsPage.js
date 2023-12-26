import React from 'react';
import NavBar from '../Components/NavBar';

function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <h1>Projects</h1>
      <img src="project_image_path" alt="Project" style={{ width: '100px', display: 'block', margin: 'auto' }} />
      <p>Description of the project.</p>
    </div>
  );
}

export default ProjectsPage;
