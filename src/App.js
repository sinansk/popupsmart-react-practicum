import React from "react";
import "./styles.css";

import { Toaster } from "react-hot-toast";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="App">
      <TodoPage />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default App;
