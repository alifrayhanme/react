import "./App.css";
import { AddTodo } from "./Component/AddTodo";
import { TodoList } from "./Component/TodoList";
import { TodosContextProvider } from "./Component/TodosContext";

function App() {

  return (
    <>
      <h1>Simple Todo List</h1>
      <TodosContextProvider>
        <AddTodo />
        <TodoList />
      </TodosContextProvider>
    </>
  );
}

export default App;
