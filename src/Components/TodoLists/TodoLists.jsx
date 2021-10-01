import React from "react";
import "../TodoLists/TodoLists.css";

const TodoLists = (props) => {
  let arr=props.todos;
  
  return (
    <ul>
      {arr.map((id) => {
        return (
          <div className="todos" key={id}>
            <li>{id}</li>
            <button className="edit" id={id} onClick={props.editTodo}>Edit</button>
            <button className="delete" onClick={props.deleteTodo} id={id}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoLists;
