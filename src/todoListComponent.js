import React from 'react'
import { ButtonGroup, IconButton, Button, Grid, Paper, Typography, Chip } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import DoneIcon from "@material-ui/icons/Done"

function TodoListComponent(props) {

    return (
        <>
            <Grid container direction="column"
                elevation={4}
                spacing={2}
                style={{ marginTop: "1.2rem" }}>
                {
                    props.todos.map((todo) => {
                        return (
                            <Grid item key={todo.id} >
                                <Paper style={{ padding: "0.8rem" }}>
                                    <Grid container
                                        style={{ padding: '0, 8rem' }} justify="space-between">
                                        <Grid item>
                                            <Typography variant="h6">{todo.val}</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Chip color="primary" label={todo.priority}
                                                size="small">
                                            </Chip>
                                        </Grid>
                                    </Grid>
                                    <Typography>Des: {todo.des}</Typography>

                                    <Typography variant="body2">
                                        Due: {todo.dueDate}
                                    </Typography>
                                    <ButtonGroup
                                        style={{ paddingTop: "12px" }}
                                        variant="text"
                                        size="small"
                                        color="primary"
                                        aria-label="outlined primary button group">
                                        <IconButton onClick={() => { props.handleDelete(todo.id) }}>
                                            <DeleteIcon></DeleteIcon>
                                        </IconButton>
                                        <IconButton onClick={() => {
                                            props.handleEditClick(todo)
                                        }}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DoneIcon />
                                        </IconButton>

                                    </ButtonGroup>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default TodoListComponent