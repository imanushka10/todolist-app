import React from 'react'
import { DialogActions, Button, Grid, Dialog, DialogTitle, DialogContent, TextField, FormControl, Select, InputLabel, MenuItem } from "@material-ui/core"
// import { DialogActions } from "@material-ui/core/DialogActions"

const FormDialogComponent = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{ minWidth: "60vw" }}>
            <DialogTitle>
                Form dialog
            </DialogTitle>
            <DialogContent >
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField label="Todo Text...." variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                        <FormControl variant="filled" style={{ width: "100%" }}>
                            <InputLabel id="priorityLabel">priority</InputLabel>
                            <Select labelId="priorityLabel"
                                label="Priority">
                                <MenuItem value="Low">Low</MenuItem>
                                <MenuItem value="Med">Med</MenuItem>
                                <MenuItem value="High">High</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField type="date"
                            label="due date" variant="outlined"
                            defaultValue="22/12/2020"
                            style={{ width: "100%" }}
                            InputLabelProps={{
                                shrink: true,
                            }}></TextField>

                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary">Add</Button>
                <Button onClick={props.handleClose}>Cancel</Button>

            </DialogActions>
        </Dialog>
    )
}
export default FormDialogComponent
