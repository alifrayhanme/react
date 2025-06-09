import getNextTodoId from "../utils/getNextTodoId";

export default function (todos, action) {
  switch (action.type) {
    case "change":
      return todos.map((item) => {
        if (item.id === action.todo.id) {
          return {
            ...action.todo,
            title: action.todo.title,
            done: action.todo.done,
          };
        }
        return item;
      });
    case "delete":
      return todos.filter((item) => action.id !== item.id);
    case "add":
      return [
        ...todos,
        {
          id: getNextTodoId(todos),
          title: action.title,
          done: false,
        },
      ];
    default:
      throw new Error("No matching action!");
  }
}
