import React from 'react'
import { Grid, Typography, Fab } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"


function HeaderComponent({ handleFabClick }) {

    return (
        <>
            <Grid container justify="space-between"
                alignItem="center"
                style={{ marginTop: "2rem" }}>
                <Grid item>
                    <Typography variant="h4">
                        ToDo
                    </Typography>
                </Grid>
                <Grid item>
                    <Fab
                        onClick={handleFabClick}
                        size="medium" color="primary">
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderComponent