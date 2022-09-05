import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../redux/todosSlice";
import { useNavigate } from "react-router-dom";
const NameInput = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const onChangeInput = (e) => {
    setName(e.target.value);
  };
  const dispatch = useDispatch();
  const handleName = () => {
    dispatch(setUserName(name));
    navigate("/todos", { replace: true });
  };

  return (
    <form
      className="flex justify-between gap-2 items-center h-12 transition-all-500 transition-[border]-1000"
      onSubmit={handleName}
    >
      <input
        className={`${` rounded-xl`} w-full rounded-xl h-full pl-2 focus:outline-none focus:border-[0.5px] focus:border-green-500`}
        name="content"
        placeholder="What is your name ?"
        value={name}
        onChange={onChangeInput}
      ></input>
      <button
        className={`${`rounded-xl`} rounded-xl  btn w-1/6 h-full  dark:text-slate-500 bg-gray-50 hover:bg-gray-200 `}
      >
        Add
      </button>
    </form>
  );
};

export default NameInput;
