import React from "react";
import "./FooterComponent.css";
import { useState } from "react";
import { getAllByAltText } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todosSlice";

const FooterComponent = ({}) => {
  const dispatch = useDispatch();
  function clearAll() {
    dispatch(deleteTodo());
  }

  return (
    <div className="footer">
      <p>Items Left </p>
      <ul>
        <li>
          <button className="All">All</button>
        </li>
        <li>
          <button className="Active">Active</button>
        </li>
        <li>
          <button className="Complated">Complated</button>
        </li>
      </ul>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default FooterComponent;
