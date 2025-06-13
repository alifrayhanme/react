import getNextTodoId from "../utills/getNextTodoId";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "change":
      return todos.map(function (todoItem) {
        if (todoItem.id === action.todo.id) {
          return {
            ...todoItem,
            title: action.todo.title,
            complete: action.todo.complete,
          };
        }
        return todoItem;
      });

    case "add":
      return [
        ...todos,
        {
          id: getNextTodoId(todos),
          title: action.title,
          complete: false,
        },
      ];

    case "delete":
      return todos.filter(function (todo) {
        return todo.id !== action.id;
      });

    default:
      throw new Error("action not found");
  
  }
};
export default todosReducer;
