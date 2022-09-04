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
    <form
      className="flex justify-between gap-2 items-center h-12 transition-all-500"
      onSubmit={onSubmit}
    >
      <input
        className={`w-full rounded-xl h-full focus:outline-none focus:border-[0.5px] focus:border-green-500`}
        name="content"
        placeholder="What will you do ?"
        value={form}
        onChange={onChangeInput}
      ></input>
      <button
        className={`${
          todos?.length > 0 ? `rounded-none` : `rounded-xl`
        } btn w-1/6  h-full bg-gray-50 hover:bg-gray-200 `}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
