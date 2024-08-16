//=== React Lib
import React from "react";
//== Material UI
import Grid from '@mui/material/Grid'
import '../App.css';

// == Description:
// BorderWrapperComponent - A Grid component that will act as a inner grid within a nested grid.
// This will be where I store the main layout within the component
// + pageTitle: the title displayed on the page
// + block: a block allocated for captions and outer objects not in the bordered object
// + borderObject: The border object that will display the main layout of the page


const BorderWrapper =( {image=null, topBlock, bottomBlock=null, spacing=5 } )=>{

    return(
        <div className='borderWrapper'>
        
            {/*== Image Segment ==*/}
            {image && (
                <Grid container spacing={spacing} justifyContent="center">
                    <Grid item xs={3}>
                        {image}
                    </Grid>
                </Grid>
            )}

            <Grid container spacing={spacing} justifyContent="center">
                {/*== Top/Main Block Segment ==*/}
                <Grid item xs={6}>
                    {topBlock}
                </Grid>
            </Grid>

                {/*== Bottom Block Segment ==*/}
                {bottomBlock && (
                    <Grid container spacing={spacing} justifyContent="center">
                        <Grid item xs={6}>
                            {bottomBlock}
                        </Grid>
                    </Grid>
                )}
        </div>
    );
}

export default BorderWrapper