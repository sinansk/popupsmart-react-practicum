import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import TodoPage from "./pages/TodoPage";
import { fetchTodos } from "./redux/todosSlice";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ThemeButton from "./components/ThemeButton";
import LogoutButton from "./components/LogoutButton";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const theme = useSelector((state) => state.theme.theme);

  const userName = useSelector((state) => state.todos.userName);
  return (
    <div
      className={`${
        theme === "dark" ? "dark bg-slate-700" : "bg-sky-400"
      }    w-screen relative h-screen flex flex-col justify-center items-center `}
    >
      <div className="absolute top-5 flex items-center justify-between">
        <ThemeButton />
        {userName !== "" && <LogoutButton />}
      </div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/todos"
          element={userName === "" ? <Navigate to="/" /> : <TodoPage />}
        />
      </Routes>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Footer />
    </div>
  );
}

export default App;
