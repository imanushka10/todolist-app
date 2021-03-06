import React, { useState, useEffect } from "react"
import HeaderComponent from "./headerComponent"
import TodoListComponent from "./todoListComponent"
import uuid from "react-uuid"
import { Container, CssBaseline } from "@material-ui/core"
import FormDialogComponent from "./formDialogComponent"
import { useFormik } from "formik"

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
  const [todos, setTodos] = useLocalStorageState('todos', [])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editTodo, setEditTodo] = useState({})


  const getCurrentDate = () => {
    const now = new Date()
    return now.toISOString().slice(0, 10)
  }

  const formik = useFormik({
    initialValues: {
      todoText: "",
      priority: "Low",
      des: "hello im description",
      dueDate: getCurrentDate()
    }
  });

  useEffect(() => {
    if (isEditMode) {
      formik.values.todoText = editTodo.val;
      formik.values.des = editTodo.des
      formik.values.priority = editTodo.priority;
      formik.values.dueDate = editTodo.dueDate
    }
    else {
      formik.values.todoText = ""
      formik.values.des = ""
      formik.values.priority = "Low"
      formik.values.dueDate = getCurrentDate()

    }

  }, [isEditMode])

  const handleFabClick = () => {
    console.log('click')
  }

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    if (isEditMode) setIsEditMode(false)
  }

  const handleSubmit = (e) => {
    const { todoText, des, priority, dueDate } = formik.values
    if (!isEditMode) {
      setTodos([...todos, {
        id: uuid(), val: todoText, des: des,
        priority: priority, dueDate: dueDate
      }])
    }
    else {
      const newTodos = [...todos]
      const t = newTodos.find(t => t.id === editTodo.id)
      t.val = todoText
      t.des = des
      t.priority = priority
      t.dueDate = dueDate
      setIsEditMode(false)
      setEditTodo({})
      setTodos(newTodos)
    }
    setIsDialogOpen(false)
    formik.values.todoText = ""
    formik.values.des = ""
    formik.values.priority = "Low"
    formik.values.dueDate = getCurrentDate()

  }

  const handleDelete = (id) => {
    const newTodos = [...todos]
    setTodos([...newTodos.filter(t => t.id !== id)])
  }

  const handleEditClick = (todo) => {
    setIsDialogOpen(true)
    setIsEditMode(true)
    setEditTodo(todo)
  }


  return (
    <>
      <CssBaseline />
      <Container>
        <HeaderComponent handleFabClick={handleDialogOpen} />
        <TodoListComponent todos={todos}
          handleDelete={handleDelete}
          handleEditClick={handleEditClick} />
      </Container>
      <FormDialogComponent
        open={isDialogOpen}
        handleClose={handleDialogClose}
        handleSubmit={handleSubmit}
        formik={formik}
        isEditMode={isEditMode}
      />
    </>
  );
}

export default App;
