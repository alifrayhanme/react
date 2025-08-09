import { TodoContant } from "./TodoContant";
import { useTodo } from "./TodosContext";

export const Todo = ({ todo }) => {
  const {onChangeTodo, onDeleteTodo} = useTodo()

  return (
    <>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={(e) =>
          onChangeTodo({
            id: todo.id,
            title: todo.title,
            complete: e.target.checked,
          })
        }
      />

      <TodoContant todo={todo}/>

      <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
    </>
  );
};
