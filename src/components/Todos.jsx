import React from "react";
import "./Todos.css";

function Todos({ todos, clickDone, clickDelete, children }) {
  return (
    <div>
      <h2>{children}</h2>
      <div className="todo-container">
        {todos.map((todo) => {
          return (
            <ul className="todo-card" key={todo.id}>
              <div className="todo-content">
                <li className="todo-title">할일: {todo.title}</li>
                <li className="todo-detail">{todo.detail}</li>
              </div>
              <div className="btn-container">
                <button
                  className="cancel-done btn"
                  onClick={() => clickDone(todo)}>
                  {todo.status ? "취소" : "완료"}
                </button>
                <button
                  className="delete btn"
                  onClick={() => clickDelete(todo.id)}>
                  삭제
                </button>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
