import React from 'react';
import _ from 'lodash';
//== Material UI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//== Compontents 
import ProjectCardComponent from './ProjectCardComponent'

function ListComponent(){
    return(
        <List sx={{ maxWidth: 600, bgcolor: '#3cf0ff' }}>
        {
            // Mapping that list the individual projects based on listOfProjectsPage
            _.map(listOfProjectsPage, (project) => {
                return (
                    <ListItem>
                        <ProjectCardComponent
                            img={project.img}
                            imgTitle={project.imgTitle}
                            projTitle={project.projTitle}
                            projDesc={project.projDesc}
                        />
                    </ListItem>
                )
            })
        }
        </List>
    )
}

const listOfProjectsPage = [
    {
        id:1,
        img: ``,
        imgTitle: 'Display of EDDperience Radio',
        projTitle:'EDDPerience Radio',
        projDesc: 'I love music and wanted to share some songs I listen to in a fun format. I want to make this a series but for\
        now stay tuned for the first of the series'
    },
    {
        id:2,
        img: `${process.env.PUBLIC_URL}/images/proj1.png`,
        imgTitle: 'Display of The Gals Just Want to Dance',
        projTitle:'The Gals Just Want to Dance',
        projDesc: 'This album is will be my first music album. Album cover is based on a true story.'
    },
    {
        id:3,
        img: `${process.env.PUBLIC_URL}/images/techbro_drac.png`,
        title: 'Display of Tech Bro Dracula',
        projTitle:'Tech Bro Dracula',
        projDesc: 'This is a screenplay Im writing to take advantage of the public domain use of Dracula. Currently cooking with the script so just wait on it!!!',
    },
]

export default ListComponent;