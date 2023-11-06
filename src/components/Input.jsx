import React from "react";
import "./Input.css";

function Input({ onTitle, todoTitle, onDetail, todoDetail, onSubmit }) {
  return (
    <form action="" className="todo-form">
      <label>할일</label>
      <input
        className="title input"
        type="text"
        onChange={onTitle}
        value={todoTitle}
      />
      <label>내용</label>
      <input
        className="detail input"
        type="text"
        onChange={onDetail}
        value={todoDetail}
      />
      <button className="submit-btn" onClick={onSubmit}>
        추가
      </button>
    </form>
  );
}

export default Input;
