import { createContext, useContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";
import { initialTodos } from "../data/initialTodos";


const TodosContext = createContext(null);


export const TodosContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const handleChangeTodo = (todo) => {
    dispatch({
      type: "change",
      todo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  };
  return (
    <TodosContext
      value={{
        todos,
        onAddTodo: handleAddTodo,
        onChangeTodo: handleChangeTodo,
        onDeleteTodo: handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext>
  );
};



export function useTodo(){
    return useContext(TodosContext);
}


