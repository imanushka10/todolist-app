import React from 'react'

function FormComponent(props) {

    return (
        <>
            {/* <div>
                <input type="text"
                    value={props.value}
                    onChange={props.handleChange}
                    style={{ border: "1px solid black" }}
                    placeholder="Eg: Learn React !!"></input>
                <button onClick={props.handleSubmit}>
                    ➕</button>
            </div> */}
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Enter Task</label>
                    <input type="text"
                        value={props.value}
                        onChange={props.handleChange}
                        style={{ border: "1px solid black" }}
                        placeholder="Eg: Learn React !!"></input>

                </div>
                <button type="submit">
                    ➕</button>
            </form>
        </>
    )
}

export default FormComponent