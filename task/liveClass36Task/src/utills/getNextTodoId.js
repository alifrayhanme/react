const getNextTodoId = (todos) => {
    console.log(todos);
    if (todos.length === 0) {
        return 1;
    }


    const maxId = todos.reduce(function (maxId, todo) {
      return  Math.max(maxId, todo.id)
    }, 0)
    return maxId + 1;

};

export default getNextTodoId