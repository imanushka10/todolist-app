import React from 'react'

function EditModalComponent(props) {
    return (
        <div className={`${props.isOpen ? "block" : "hidden"} absolute bg-blue-100 p-8 inset-0`}>
            <h2>Update Todo</h2>
            <form onSubmit={props.updateTodo}>
                <div>
                    <label>Edit Task</label>
                    <input type="text"
                        // value={props.value}
                        // onChange={props.handleChange}
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