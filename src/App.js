import React, { useState } from "react"
import HeaderComponent from "./headerComponent"
import TodoListComponent from "./todoListComponent"
import uuid from "react-uuid"
import EditModalComponent from "./editModalComponent"
import { Container, CssBaseline } from "@material-ui/core"
import FormDialogComponent from "./formDialogComponent"


// function useLocalStorageState(key, defaultValue = '') {
//   const [state, setState] = React.useState(
//     () => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
//   )

//   React.useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state])

//   return [state, setState]
// }



function App() {
  // const [inputValue, setInputValue] = useState('')
  // const [todos, setTodos] = useLocalStorageState('todos', [])
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  // const [editTodoState, setEditTodoState] = useState({})


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (inputValue === "") return;
  //   setTodos([...todos, { id: uuid(), val: inputValue, done: false }])
  //   setInputValue("")
  //   console.log(todos)
  // }

  // const handleChange = (e) => {
  //   setInputValue(e.target.value)
  // }

  // const deleteTodo = (todo) => {
  //   setTodos(todos.filter((t) => t.id !== todo.id))
  // }
  // const markDone = (todo) => {
  //   const newTodos = [...todos]
  //   const t = newTodos.find(t => t.id === todo.id)
  //   t.done = !t.done
  //   setTodos(newTodos)
  // }

  // const editTodo = (todo) => {
  //   setIsEditModalOpen(true)
  //   setEditTodoState(todo)
  // }

  // const updateTodo = (e, todoText) => {
  //   e.preventDefault()
  //   const newTodos = [...todos]
  //   const t = newTodos.find(t => t.id === editTodoState.id)
  //   t.val = todoText
  //   setTodos(newTodos)
  //   setEditTodoState({})
  //   setIsEditModalOpen(false)
  // }


  const [todos, setTodos] = useState([
    {
      val: "todo1",
      priority: "high",
      due: "2th june"
    },
    {
      val: "todo2",
      priority: "med",
      due: "12th june"
    },
    {
      val: "todo3",
      priority: "low",
      due: "22th june"
    },
    {
      val: "todo4",
      priority: "med",
      due: "20th june"
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleFabClick = () => {
    console.log('click')
  }
  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }


  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      <CssBaseline />
      <Container>
        <HeaderComponent handleFabClick={handleDialogOpen} />
        <TodoListComponent todos={todos} />
      </Container>
      <FormDialogComponent
        open={isDialogOpen}
        handleClose={handleDialogClose} />
      {/* <div>
        <HeaderComponent
          value={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
        < EditModalComponent isOpen={isEditModalOpen}
          todo={editTodoState}
          updateTodo={updateTodo} />

        <TodoListComponent
          todos={todos}
          deleteTodo={deleteTodo}
          markDone={markDone}
          editTodo={editTodo} />
      </div> */}
    </>
  );
}

export default App;
