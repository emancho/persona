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


const BorderWrapper =()=>{

    return(
        <div className='borderWrapper'>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={8}>
                </Grid>
            </Grid>
        </div>
    );
}

export default BorderWrapper