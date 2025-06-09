import React from "react";
import { Todo } from "./Todo";
import { useTodo } from "./contexts/TodosContext";

export const TodoList = () => {
  const { todos } = useTodo();
  return (
    <>
      {todos.map((todoItem) => (
        <li className="list" key={todoItem.id}>
          <Todo todo={todoItem} />
        </li>
      ))}
    </>
  );
};
