import React from "react";
import { useTodo } from "./contexts/TodosContext";
import { TodoContent } from "./TodoContent";

export const Todo = ({ todo }) => {
  const {onChangeTodo, onDeleteTodo} = useTodo()


  return (
    <>
      <input type="checkbox" checked={todo.done} onChange={(e)=> onChangeTodo({
        id: todo.id,
        title: todo.title,
        done: e.target.checked,
      })} />
      <TodoContent todo={todo}/>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </>
  );
};