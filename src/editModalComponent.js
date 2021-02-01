import React, { useState, useEffect } from 'react'

function EditModalComponent(props) {
    const [inputValue, setInputValue] = useState('')
    const [todo, setTodo] = useState({})

    useEffect(() => {
        setInputValue(props.todo.val)
        setTodo(props.todo)
    }, [props.todo])


    const handleChange = (e) => {
        setInputValue(e.target.value)

    }
    return (
        <div className={`${props.isOpen ? "block" : "hidden"} absolute bg-blue-100 p-8 inset-0`}>
            <h2>Update Todo</h2>
            <form onSubmit={(e) => { props.updateTodo(e, inputValue) }}>
                <div>
                    <label>Edit Task</label>
                    <input type="text"
                        value={inputValue}
                        onChange={handleChange}
                        style={{ border: "1px solid black" }}
                        placeholder="Eg: Learn React !!"></input>

                </div>
                <button type="submit">
                    ✅</button>
            </form>
        </div>
    )
}
export default EditModalComponent