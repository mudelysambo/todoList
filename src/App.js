import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [surname, setSurname] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      surname:surname,
    };

    // add the todo to the list
    setList([newTodo]);

    // clear input box
    setInput("");
    setSurname("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <form>
      <h1>Todo List</h1>
      <input
      type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <input
      type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
      <button onClick={() => addTodo(input, surname)}>Add</button>
      </form>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            {todo.surname}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



