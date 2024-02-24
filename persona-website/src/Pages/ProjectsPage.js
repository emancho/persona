import React from 'react';
import '../App.css';
//== Components
import NavBar from '../Components/NavBar';
import ImgList from '../Components/TitlebarImageList';
import CenteredContent from '../Components/CenteredContent'
//== Material UI
import Typography from '@mui/material/Typography';

const projCaption = `
  Welcome to the gallery. Here are my creative projects of past, present and future...
`

function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <div className="centered-typography">
          <Typography variant="h1" color="#0a3e0a" >{"The Gallery"}</Typography>
          <Typography variant="h6" color="#0a3e0a">{projCaption}</Typography>
      </div>
      <CenteredContent webpage={<ImgList title={"Projects"}/>}/>
    </div>
  );
}

export default ProjectsPage;
