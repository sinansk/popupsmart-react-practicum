import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo, fetchTodos } from "../redux/todosSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTodo(e.target.name)).then(() => dispatch(fetchTodos()));
  };
  return (
    <li className="todo" id={todo.id}>
      <input
        type="checkbox"
        className="toggle"
        id={todo.id}
        checked={todo.isComplated}
      ></input>
      <label htmlFor={todo.id}>{todo.content}</label>
      <button
        className="removeTodo"
        name={todo.id}
        onClick={(e) => handleDelete(e)}
      >
        X
      </button>
    </li>
  );
}

export default Todo;
