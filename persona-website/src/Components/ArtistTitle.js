import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function ArtistTitle(){
    return (
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
            {'The Journey of an Artist'}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
            {'Ed___d w/o the war'}
            </Typography>
        </CardContent>
    );
}

export default ArtistTitle;