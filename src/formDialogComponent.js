import React from 'react'
import {
    DialogActions, Button, Grid, Dialog,
    DialogTitle, DialogContent, TextField,
    FormControl, Select, InputLabel,
    MenuItem
} from "@material-ui/core"
import FormComponent from "./formComponent"

const FormDialogComponent = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{ minWidth: "60vw" }}>
            <DialogTitle>
                {props.isEditMode ? "Update Todo" : "Add Todo"}
            </DialogTitle>
            <DialogContent >
                <FormComponent formik={props.formik} />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button color="primary" onClick={props.handleSubmit}>
                    {props.isEditMode ? "Update" : "Add"}
                </Button>

            </DialogActions>
        </Dialog>
    )
}
export default FormDialogComponent
