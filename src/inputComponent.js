import React from 'react'

function InputComponent(props) {

    return (
        <>
            <div>
                <input type="text"
                    value={props.value}
                    onChange={props.handleChange}
                    style={{ border: "1px solid black" }}
                    placeholder="Eg: Learn React !!"></input>
                <button onClick={props.handleSubmit}>Add !!</button>
            </div>
        </>
    )
}

export default InputComponent