import React, { createContext, useContext, useReducer } from "react";
import initialData from "../data/initialData";
import todosReducer from "../reducers/todosReducer";
import { TodoContant } from "./TodoContant";

const TodosContext = createContext(null);


export const TodosContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialData);

  const handelChangeTodo = (todo) => {
    dispatch({
      type: "change",
      todo,
    });
  };

  const handelDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handelAddTodo = (title) => {
    dispatch({
      type: "add",
      title: title,
    });
  };

  return (
    <TodosContext
      value={{
        todos,
        onChangeTodo: handelChangeTodo,
        onAddTodo: handelAddTodo,
        onDeleteTodo: handelDeleteTodo,
      }}
    >
      {children}
    </TodosContext>
  );
};


export function useTodo(){
    return useContext(TodosContext)
}