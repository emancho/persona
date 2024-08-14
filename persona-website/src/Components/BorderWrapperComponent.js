//=== React Lib
import React from "react";
//== Material UI
import Grid from '@mui/material/Grid'

// == Description:
// BorderWrapperComponent - A Grid component that will act as a inner grid within a nested grid.
// This will be where I store the main layout within the component
// + pageTitle: the title displayed on the page
// + block: a block allocated for captions and outer objects not in the bordered object
// + borderObject: The border object that will display the main layout of the page


const BorderWrapper =( {image=null, topBlock, bottomBlock=null, spacing=5 } )=>{

    return(
        <div className='borderWrapper'>
            <Grid container spacing={spacing} justifyContent="center">
                {/*== Image Segment ==*/}
                {image && (
                    <Grid item xs={12}>
                        {image}
                    </Grid>
                )}
                {/*== Top/Main Block Segment ==*/}
                <Grid item xs={6}>
                    {topBlock}
                </Grid>    
                {/*== Bottom Block Segment ==*/}
                {bottomBlock && (
                    <Grid item xs={8}>
                        {bottomBlock}
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default BorderWrapper