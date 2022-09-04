import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import TodoPage from "./pages/TodoPage";
import { fetchTodos } from "./redux/todosSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const loading = useSelector((state) => state.todos.loading);
  const todos = useSelector((state) => state.todos.data);
  console.log("todos", todos);
  console.log(loading, "loading");
  return (
    <div className="App">
      <TodoPage />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default App;
