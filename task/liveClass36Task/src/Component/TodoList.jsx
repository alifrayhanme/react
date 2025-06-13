import { Todo } from "./Todo";
import { useTodo } from "./TodosContext";

export const TodoList = () => {
  const { todos } = useTodo();

  return (
    <>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              <Todo todo={todo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
