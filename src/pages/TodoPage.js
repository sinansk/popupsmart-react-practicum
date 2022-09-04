import React from "react";
import "./TodoPage.css";
import FooterComponent from "../components/FooterComponent";
import TodoInput from "../components/TodoInput";
import ListComponent from "../components/ListComponent";
import { useSelector } from "react-redux";

const TodoPage = () => {
  const todos = useSelector((state) => state.todos.data);

  return (
    <div
      className={`w-[35rem] rounded-xl bg-gray-400 border border-gray-100  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 flex flex-col justify-start relative max-h-[80vh]`}
    >
      <TodoInput />
      <ListComponent />
      <FooterComponent />
    </div>
  );
};

export default TodoPage;
