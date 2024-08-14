import React from 'react';
import _ from 'lodash';
//== Material UI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//== Compontents 
import ProjectCardComponent from './ProjectCardComponent'
//== List of projects
import {listOfProjectsPage} from '../ProjectList.js'

function ListComponent(){
    
    return(
        <List sx={{ maxWidth: 575}}>
        {
            // Mapping that list the individual projects based on listOfProjectsPage
            _.map(listOfProjectsPage, (project, index) => {
                return (
                    <ListItem key={index} sx={{ pt: index === 0 ? 0 : 6, objectFit: "contain" }}>
                        <ProjectCardComponent
                            img={project.img}
                            imgTitle={project.imgTitle}
                            projTitle={project.projTitle}
                            projDesc={project.projDesc}
                            projAction={project.projAction}
                            projResponse={project.projResponse}
                        />
                    </ListItem>
                )
            })
        }
        </List>
    )
}

export default ListComponent;