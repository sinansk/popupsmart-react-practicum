import { useSelector } from "react-redux";
import Todo from "./Todo";

const ListComponent = () => {
  const filteredTodos = useSelector((state) => state.todos.filteredTodos);

  return (
    <div className="">
      {filteredTodos && (
        <ul>
          {filteredTodos?.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListComponent;
