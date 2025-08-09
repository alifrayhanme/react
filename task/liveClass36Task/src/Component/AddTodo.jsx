import React, { useState } from 'react'
import { useTodo } from './TodosContext'

export const AddTodo = () => {
  const [title, setTitle] = useState("")
  const {onAddTodo} = useTodo()
  
  return (
    <>
        <input type="text" placeholder='add task' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => {onAddTodo(title); setTitle("")}}>addTodo</button>
    </>
  )
}
