import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
//Component
import AlertIcon from './AlertIcon'


function TitlebarImageList({title}) {
    return (

        <div className="sky-blue-tag">
            <ImageList sx={{ width: 500, height: 600 }} cols={1}> {/* Updated cols to 1 */}
              <ImageListItem key="Subheader" cols={1}> {/* Updated cols to 1 */}
                <ListSubheader>{title}</ListSubheader>
              </ImageListItem>
              {itemData.map((item) => (
                <ImageListItem key={item.img} cols={1}> {/* Updated cols to 1 */}
                  <img
                    className="image-border"
                    srcSet={item.img}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    className='item-border'
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <AlertIcon item={item}/>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </div>
      );
    }

const itemData = [
  {
    img: `${process.env.PUBLIC_URL}/images/proj1.png`,
    title: 'The Gals Just Want to Dance (Music Project)',
    author: '@ed___d w/o the WAR',
    alert: 'Release Date of project: TBD',
    rows: 1,
    cols: 1,
    featured: true
  },
  {
    img: `${process.env.PUBLIC_URL}/images/techbro_drac.png`,
    title: 'Tech Bro ( Screen Write )',
    author: '@ed___d w/o the WAR',
    alert: 'Release Date of project: TBD',
    rows: 1,
    cols: 1,
    featured: true
  },
];

export default TitlebarImageList;