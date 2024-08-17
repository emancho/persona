import React from 'react';
import _ from 'lodash';
//== Material UI
import Grid from '@mui/material/Grid';
//== Compontents 
import ProjectCardComponent from './ProjectCardComponent'

const ListComponent = ({ projectList }) => {
    return (
      <Grid container spacing={4} justifyContent="center">
        {
          _.map(projectList, (project, index) => (
            <Grid item xs={12} key={index}>
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
  
  export default ListComponent;