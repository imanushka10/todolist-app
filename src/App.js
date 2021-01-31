import React, { useState } from "react"
import FormComponent from "./formComponent"
import TodoListComponent from "./todoListComponent"
import uuid from "react-uuid"
import EditModalComponent from "./editModalComponent"

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}



function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useLocalStorageState('todos', [])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editTodoId, setEditTodoId] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue === "") return;
    setTodos([...todos, { id: uuid(), val: inputValue, done: false }])
    setInputValue("")
    console.log(todos)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  // const deleteTodo = (todo) => {
  //   setTodos(todos.filter((todo) => todo.val !== todoText))
  // }
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }
  const markDone = (todo) => {
    const newTodos = [...todos]
    const t = newTodos.find(t => t.id === todo.id)
    t.done = !t.done
    setTodos(newTodos)
  }

  const editTodo = (todo) => {
    setIsEditModalOpen(true)
    setEditTodoId(todo.id)
  }

  //   const updateTodo = (todo) => {
  // setEditTodoId
  //   }

  return (
    <>
      <div>
        <FormComponent
          value={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        < EditModalComponent isOpen={isEditModalOpen}
          todoId={editTodoId} />

        <TodoListComponent
          todos={todos}
          deleteTodo={deleteTodo}
          markDone={markDone}
          editTodo={editTodo} />
      </div>
    </>
  );
}

export default App;
