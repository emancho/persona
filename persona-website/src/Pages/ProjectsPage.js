import React from 'react';
import '../App.css';
//== Components
import NavBar from '../Components/NavBar';
import ImgList from '../Components/TitlebarImageList';
import CenteredContent from '../Components/CenteredContent'
//== Material UI
import Typography from '@mui/material/Typography';

function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <div className="centered-typography">
          <Typography variant="h3" color="#0a3e0a">{"Projects"}</Typography>
      </div>
      <CenteredContent webpage={<ImgList title={'The Gallery'}/>}/>
    </div>
  );
}

export default ProjectsPage;
