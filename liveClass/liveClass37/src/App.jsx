import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [isEditId, setIsEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchAllTodo = async () => {
    const responce = await fetch("http://localhost:3000/todos");
    const data = await responce.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchAllTodo();
  }, []);

  const todoSubmitHandel = async (e) => {
    e.preventDefault();
    if (!todoTitle.trim()) {
      return alert("plz provide a valid todo title");
    }
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({ title: todoTitle, completed: false }),
    }).then(() => {
      fetchAllTodo();
      setTodoTitle("");
    });
  };

  const deleteHandel = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then(() => fetchAllTodo());
  };

  const changeHandel = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title: editTitle, completed: false }),
    }).then(() => {
      fetchAllTodo();
      setIsEditId(null);
    });
  }


  const checkBoxHandel = (id, completed) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed }),
    }).then(() => {
      fetchAllTodo();
    });
  }


  return (
    <>
      <h2>todo list</h2>
      <form onSubmit={todoSubmitHandel}>
        <input
          type="text"
          placeholder="add todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((info) => (
          <li key={info.id}>
            <input type="checkbox" checked={info.completed} onChange={(e) => checkBoxHandel(info.id, e.target.checked)} />
            {isEditId === info.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={()=> changeHandel(info.id)}>save</button>
              </>
            ) : (
              <>
                <span className={info.completed ? `complete-todo` : ``}>{info.title}</span>
                <button
                  onClick={() => {
                    setIsEditId(info.id);
                    setEditTitle(info.title);
                  }}
                >
                  edit
                </button>
              </>
            )}
            <button onClick={() => deleteHandel(info.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
