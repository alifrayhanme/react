import React, { useState } from "react";
import { useTodo } from "./TodosContext";

export const TodoContant = ({todo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const {onChangeTodo} = useTodo()

  return isEditing ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          onChangeTodo({
            id: todo.id,
            title: e.target.value,
            complete: todo.complete,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setIsEditing(true)}>edit</button>
    </>
  );
 
};

