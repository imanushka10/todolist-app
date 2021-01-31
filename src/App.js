import react, { useState } from "react"
import InputComponent from "./inputComponent"
import TodoListComponent from "./todoListComponent"


function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    if (inputValue === "") return;
    setTodos([...todos, { val: inputValue, done: false }])
    setInputValue("")
    console.log(todos)
  }
  const deleteTodo = (todoText) => {
    setTodos(todos.filter((todo) => todo.val !== todoText))
  }

  const markDone = (todo) => {
    setTodos([...todos.filter(t => t.val !== todo.val),
    { val: todo.val, done: !todo.done }])
    console.table(todos)
  }

  return (
    <>
      <div>
        <InputComponent
          value={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        <TodoListComponent
          todos={todos}
          deleteTodo={deleteTodo}
          markDone={markDone} />
      </div>
    </>
  );
}

export default App;
