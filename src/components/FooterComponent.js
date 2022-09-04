import React, { useEffect } from "react";
import "./FooterComponent.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos, filterTodos } from "../redux/todosSlice";

const FooterComponent = ({}) => {
  const dispatch = useDispatch();

  const filteredTodos = useSelector((state) => state.todos.filteredTodos);
  const todos = useSelector((state) => state.todos.data);

  function filterTodo(e) {
    const buttonName = e.target.name;
    dispatch(fetchTodos()).then(() => dispatch(filterTodos(buttonName)));
  }

  return (
    <div
      className={`${
        !todos?.length > 0 ? `hidden` : `flex`
      } justify-center items-center sticky bottom-0 right-0 left-0 h-12 bg-gray-50 rounded-b-xl w-full`}
    >
      <p className="mr-auto w-14">Items {filteredTodos?.length}</p>
      <ul className="mx-auto pr-14 flex gap-5 list-none">
        <li>
          <button
            name="all"
            className="border-[0.5px]  border-emerald-500 rounded-md px-2 py-1 hover:bg-gray-100"
            onClick={(e) => filterTodo(e)}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="border-[0.5px] border-emerald-500 rounded-md px-2 py-1 hover:bg-gray-100"
            name="active"
            data-iscompleted={false}
            onClick={(e) => filterTodo(e)}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className="border-[0.5px] border-emerald-500 rounded-md px-2 py-1 hover:bg-gray-100"
            name="completed"
            data-iscompleted={true}
            onClick={(e) => filterTodo(e)}
          >
            Complated
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FooterComponent;
