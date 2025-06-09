import React, { useState } from "react";
import { useTodo } from "./contexts/TodosContext";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { onAddTodo } = useTodo();

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </>
  );
};
