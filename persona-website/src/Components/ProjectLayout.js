import React from 'react';
import '../App.css';
//== Components
import ListComponent from '../Components/ListComponent'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'
//== Material UI
import {Box} from '@mui/material';

function ProjectLayout() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <div>
          <BackgroundWrapper children={<ListComponent/>}/>
        </div>
    </Box>
  );
}

export default ProjectLayout;
