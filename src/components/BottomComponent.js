import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, filterTodos } from "../redux/todosSlice";

const BottomComponent = () => {
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
      } bg-gray-50 justify-start items-center sticky bottom-0 right-0 left-0 h-12 min-h-12 shrink-0 dark:bg-slate-600 dark:text-gray-50 rounded-b-xl w-full`}
    >
      <p className="w-20">Items {filteredTodos?.length}</p>
      <ul className="mx-auto pr-20 flex gap-5 list-none">
        <li>
          <button
            name="all"
            className="border-[0.5px] border-slate-500 dark:border-gray-100 rounded-md px-2 py-1 dark:bg-slate-500 dark:hover:bg-slate-400 hover:bg-gray-100"
            onClick={(e) => filterTodo(e)}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="border-[0.5px] border-slate-500 dark:border-gray-100 rounded-md px-2 py-1 dark:bg-slate-500 dark:hover:bg-slate-400 hover:bg-gray-100"
            name="active"
            data-iscompleted={false}
            onClick={(e) => filterTodo(e)}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className="border-[0.5px] border-slate-500 dark:border-gray-100 rounded-md px-2 dark:bg-slate-500 dark:hover:bg-slate-400 py-1 hover:bg-gray-100"
            name="completed"
            data-iscompleted={true}
            onClick={(e) => filterTodo(e)}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BottomComponent;
