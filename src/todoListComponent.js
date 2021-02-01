import React from 'react'
import { Grid, Paper, Typography, Chip } from "@material-ui/core"
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
                            <Grid item>
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
                                    <Typography variant="body2">
                                        Due: {todo.due}
                                    </Typography>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>



            {/* {props.todos.map((todo) => {
                return (
                    <div key={todo.id}
                        className={(todo.done ? "border-green-400" : "border-orange-300")}>
                        <span className={(todo.done ? "line-through" : "")}
                            onClick={(e) => { props.markDone(todo) }}>{todo.val}</span>
                        <button className="mr-4" onClick={e => { props.editTodo(todo) }}>
                            ✏️</button>
                        <button
                            onClick={(e) => { props.deleteTodo(todo) }}>
                            ❌
                    </button>
                    </div>)
            })} */}
        </>
    )
}

export default TodoListComponent