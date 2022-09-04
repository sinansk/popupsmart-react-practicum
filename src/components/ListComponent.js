import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todosSlice";
import "./ListComponent.css";

import Todo from "./Todo";

const ListComponent = () => {
  const filteredTodos = useSelector((state) => state.todos.filteredTodos);

  return (
    <div className="list">
      {filteredTodos && (
        <ul>
          {filteredTodos?.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListComponent;
