import React from 'react';
import _ from 'lodash';
//== Material UI
import Grid from '@mui/material/Grid';
//== Compontents 
import ProjectCardComponent from './ProjectCardComponent'

const GridListComponent = ({ projectList }) => {
    return (
      <Grid 
        container spacing={5} 
        justifyContent="center"
        alignItems="center">
        {
          _.map(projectList, (project, index) => (
            <Grid item 
              xs={12} 
              sm={8}             // Takes 8/12 of the width on small screens
              md={12}             // Takes 6/12 (half) of the width on medium screens
              sx={{ display: 'flex', justifyContent: 'center' }} // Center the ProjectCardComponent
              key={index}>
              <ProjectCardComponent
                img={project.img}
                imgTitle={project.imgTitle}
                projTitle={project.projTitle}
                projDesc={project.projDesc}
                projAction={project.projAction}
                projResponse={project.projResponse}
              />
            </Grid>
          ))
        }
      </Grid>
    );
  };
  
  export default GridListComponent;