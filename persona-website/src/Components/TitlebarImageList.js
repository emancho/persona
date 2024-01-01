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
            <ImageList sx={{ width: 600, height: 750 }} cols={1}> {/* Updated cols to 1 */}
          <ImageListItem key="Subheader" cols={1}> {/* Updated cols to 1 */}
            <ListSubheader component="div">{title}</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={1}> {/* Updated cols to 1 */}
              <img
                className="image-border"
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
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
    alert: 'Release Date: TBD',
    rows: 1,
    cols: 1,
    featured: true,
  },
];

export default TitlebarImageList;