import * as React from 'react';
// --- Material UI
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// Components 
import WebpageLayout from '../Components/WebPageOutline';
function SocialLinks() {

  return (
    < WebpageLayout props={VinylList}/>
  );
}


function VinylList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={1}>
        <ListSubheader component="div">Contact Me</ListSubheader>
      </ImageListItem>
        <ImageListItem key={"Test"}>
          <img
            src={`https://pngimg.com/uploads/vinyl/vinyl_PNG66.png`}
            alt={'#1'}
            loading="lazy"
          />
          <ImageListItemBar
            title={'Edd Man'}
            subtitle={'I wanna be an artist'}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
  );
}

export default SocialLinks;