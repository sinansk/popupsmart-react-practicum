import React from "react";
import "./TodoPage.css";

import FooterComponent from "../components/FooterComponent";

import TodoInput from "../components/TodoInput";
import ListComponent from "../components/ListComponent";
import { useSelector } from "react-redux";

const TodoPage = () => {
  const todosLength = useSelector((state) => state.todos.data.length);
  console.log(todosLength);
  return (
    <div className={`main ${todosLength > 0 ? "active" : null} `}>
      <TodoInput />
      <ListComponent />
      <FooterComponent />
    </div>
  );
};

export default TodoPage;
