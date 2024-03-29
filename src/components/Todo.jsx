import React from "react";
import '../App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button className="btn" onClick={() => completeTodo(index)}>Complete</button>
          <button className="btn" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }

  export default Todo;