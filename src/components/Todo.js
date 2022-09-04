import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo, fetchTodos } from "../redux/todosSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [todo2, setTodo2] = useState(todo);

  const handleDelete = (e) => {
    dispatch(deleteTodo(e.target.name)).then(() => dispatch(fetchTodos()));
  };

  const handleUpdate = () => {
    dispatch(updateTodo(todo2));
  };

  const handleToggle = () => {
    setTodo2((prevState) => ({
      ...prevState,
      isCompleted: !todo2.isCompleted,
    }));
  };

  useEffect(() => {
    handleUpdate();
  }, [todo2]);

  return (
    <li
      className={`flex w-full cursor-pointer border-b-[0.5px] border-slate-300 items-center py-1`}
    >
      <input
        type="checkbox"
        className="flex cursor-pointer ml-1 h-5 w-5 accent-emerald-500/25"
        checked={todo2.isCompleted}
        id={todo.id}
        onChange={handleToggle}
      ></input>
      <label
        className={`${
          todo2.isCompleted && `line-through`
        } p-2 w-11/12 cursor-pointer`}
        htmlFor={todo.id}
      >
        {todo.content}
      </label>

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
