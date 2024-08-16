import React from 'react'
import Grid from '@mui/material/Grid'
//=== Components
import NavBar from './NavBar';

// == Description:
// WebPageOutline - A flexbile layout that will be the template of webpages
// + pageTitle: the title displayed on the page
// + block: a block allocated for captions and outer objects not in the bordered object
// + borderObject: The border object that will display the main layout of the page

const WebPageOutline =( {pageTitle, block=null, borderObject} )=>{

    return (
        <div className='webPageOutline'>
            <Grid container spacing={1} justifyContent="center">
                {/*== The Navbar Segment ==*/}
                <Grid item xs={12}>
                    <NavBar/>
                </Grid>
                
                {/*== Title Segment ==*/}
                <Grid item xs={8}>
                    {pageTitle}
                </Grid>
                
                {/*== Block Segment ==*/}
                {block && (
                <Grid item xs={10}>
                    {block}
                </Grid>
                )}
                
                {/*== BorderObj Segment for page ==*/}
                <Grid item xs={5}>
                    {borderObject}
                </Grid>
            </Grid>
        </div>
    );
};

export default WebPageOutline;