import React from 'react';
import '../App.css';
//== Components
import ListComponent from '../Components/ListComponent'
import BackgroundWrapper from '../Components/BackgroundWrapperComponent'
//== Material UI
import {Box,Typography} from '@mui/material';

const projCaption = `Welcome to the gallery. My creative projects of past, present and future...simultaneously.`

function ProjectLayout() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" color="#0a3e0a" textAlign="center" paddingTop="10px" paddingBottom="30px">
            {projCaption}
        </Typography>
        <div>
          <BackgroundWrapper children={
            <ListComponent/>
          }
          />
        </div>
    </Box>
  );
}

export default ProjectLayout;
