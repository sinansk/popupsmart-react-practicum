import BottomComponent from "../components/BottomComponent";
import TodoInput from "../components/TodoInput";
import ListComponent from "../components/ListComponent";

const TodoPage = () => {
  return (
    <div
      className={`no-scrollbar overflow-y-scroll w-86 sm:w-[35rem] border-[1px] h-fit rounded-2xl backdrop-blur-md flex flex-col relative font-semibold justify-start max-h-[80vh] bg-clip-padding backdrop-filter  bg-opacity-50 dark:text-gray-50 border-gray-100 dark:border-slate-500`}
    >
      <TodoInput />
      <ListComponent />
      <BottomComponent />
    </div>
  );
};

export default TodoPage;
