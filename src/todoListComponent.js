import React from 'react'

function TodoListComponent(props) {

    return (
        <>
            {props.todos.map((todo) => {
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
            })}
        </>
    )
}

export default TodoListComponent