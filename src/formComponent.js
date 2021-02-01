import React from 'react'
import { useFormik } from "formik"
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"

const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            todoText: "test",
            priority: "Low",
        }
    });

    console.log(formik.values)
    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField
                        label="Todo Text...."
                        variant="outlined"
                        name="todoText"
                        onChange={formik.handleChange}
                        value={formik.values.todoText} />
                </Grid>
                <Grid item>
                    <FormControl variant="filled" style={{ width: "100%" }}>
                        <InputLabel id="priorityLabel">priority</InputLabel>
                        <Select labelId="priorityLabel"
                            name="priority"
                            onChange={formik.handleChange}
                            value={formik.values.priority}
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
        </>
    )
}
export default FormComponent