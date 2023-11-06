import React from "react";
import "./Todos.css";
import images from "./images.png";

function Todos({ todos, clickDone, clickDelete, children }) {
  return (
    <div>
      <h2>{children}</h2>
      <div className="todo-container">
        {todos.map((todo) => {
          return (
            <ul className="todo-card" key={todo.id}>
              <div className="todo-contents">
                <li className="todo-title">할일: {todo.title} </li>

                <li className="todo-detail">내용: {todo.detail}</li>
              </div>
              <div className="image-btn-container">
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
                <div>
                  {todo.status ? (
                    <img className="done-img" src={images} alt="" />
                  ) : (
                    <img src="" alt="" />
                  )}
                </div>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
