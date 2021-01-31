import React from 'react'

function TodoListComponent(props) {

    return (
        <>
            {props.todos.map((todo) => {
                return (<div key={todo.val}>
                    <span className={(todo.done ? "line-through" : "")}
                        onClick={(e) => { props.markDone(todo) }}>{todo.val}</span>
                    <button
                        onClick={(e) => { props.deleteTodo(todo.val) }}>deleteTodo
                    </button></div>)
            })}
        </>
    )
}

export default TodoListComponent