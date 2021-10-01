import React, { useState } from "react";
import TodoLists from "./Components/TodoLists/TodoLists";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const addTodo = (e) => {
    let newArr=[];
    if (e.key === "Enter") {
      if(todos){
        newArr = [...todos, newTodo];
      }else{
        newArr.push(newTodo);
      }
      localStorage.setItem("todos", JSON.stringify(newArr));
      setTodos(newArr);
      setNewTodo("");
    }
  };

  const deleteTodo = (e) => {
    let updatedArr = todos.filter((id) => {
      return id !== e.target.id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedArr));
    setTodos(updatedArr);
  };

  const editTodo = (e) => {
    let liElement = e.target.previousSibling;
    let index = todos.indexOf(liElement.innerHTML);
    liElement.setAttribute("contenteditable", true);
    liElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        liElement.setAttribute("contenteditable", false);
        let newArr = [...todos];
        newArr[index] = liElement.innerHTML;
        localStorage.setItem("todos", JSON.stringify(newArr));
        setTodos(newArr);
      }
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TODO APP</h1>
      <div className="app">
        <input
          type="text"
          placeholder="Add a Todo!!!"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          onKeyDown={addTodo}
          value={newTodo}
        ></input>
        <TodoLists
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        ></TodoLists>
      </div>
    </div>
  );
}

export default App;
