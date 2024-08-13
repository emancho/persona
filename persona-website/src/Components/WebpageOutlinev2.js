import React from 'react'
import Grid from '@mui/material/Grid'

function WebPageOutline( title, block=null, borderObject ){
    <Grid container spacing={3} justifyContent="center">
        {/* Title Segment */}
        <Grid item xs={8}>
            {title}
        </Grid>
        {block && (
        <Grid item xs={12}>
            {/* Block Segment  */}
            {block}
        </Grid>
        )}
        <Grid item xs={12}>
            {/* BorderObj Segment for page */}
            {borderObject}
        </Grid>
    </Grid>
};

export default WebPageOutline;