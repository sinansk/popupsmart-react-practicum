import { useEffect, useState } from "react";
import "./TodoInput.css";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, fetchTodos } from "../redux/todosSlice";

const TodoInput = () => {
  const defaultFormValues = {
    content: "",
    isComplated: false,
  };
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [form, setForm] = useState("");
  const [error, setError] = useState();
  const onChangeInput = (e) => {
    setForm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form.length);
    form.length >= 3
      ? dispatch(createTodo(form)).then(() => {
          dispatch(fetchTodos());
          setForm("");
        })
      : toast("Input field must be 3 character at least.");

    console.log(todos);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        name="content"
        placeholder="What will you do ?"
        value={form}
        onChange={onChangeInput}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default TodoInput;
