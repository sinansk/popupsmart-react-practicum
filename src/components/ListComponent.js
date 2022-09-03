import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todosSlice";
import "./ListComponent.css";

import Todo from "./Todo";

const ListComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="list">
      <ul>
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
