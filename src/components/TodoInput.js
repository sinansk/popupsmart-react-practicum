import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, fetchTodos } from "../redux/todosSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState("");
  const onChangeInput = (e) => {
    setForm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    form.length >= 3
      ? dispatch(createTodo(form)).then(() => {
          dispatch(fetchTodos());
          setForm("");
        })
      : toast("Input field must be 3 character at least.");
  };
  const userName = useSelector((state) => state.todos.userName);
  const filteredTodos = useSelector((state) => state.todos.filteredTodos);
  return (
    <form
      className="flex w-full z-10 sticky top-0 left-0 right-0 justify-between shrink-0 gap-2 items-center h-12 min-h-12 transition-all-500 transition-[border]-1000"
      onSubmit={onSubmit}
    >
      <input
        className={`${
          filteredTodos?.length > 0 && `rounded-b-none rounded-r-xl`
        } w-full rounded-xl h-full pl-2 dark:bg-slate-100  focus:outline-none focus:border-[0.5px] focus:border-green-500`}
        name="content"
        placeholder={`Hello ${userName}, what will you do ?`}
        value={form}
        onChange={onChangeInput}
      ></input>
      <button
        className={`${
          filteredTodos?.length > 0 && `rounded-b-none rounded-l-xl`
        } rounded-xl btn w-1/6  h-full  dark:text-slate-500 bg-gray-50 hover:bg-gray-200 `}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
