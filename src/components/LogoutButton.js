import { useDispatch } from "react-redux";
import { reset } from "../redux/todosSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <button
      onClick={handleReset}
      className="h-10 btn dark:text-slate-100 text-yellow-300 font-bold bg-transparent dark:hover:bg-slate-600 hover:bg-cyan-400 focus:outline-none ring-1 ring-cyan-100  dark:ring-slate-100 rounded-lg text-sm px-2"
    >
      LOGOUT
    </button>
  );
};

export default LogoutButton;
