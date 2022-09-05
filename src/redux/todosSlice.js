import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../utils";
const initialState = {
  userName: "",
  data: null,
  allTodos: null,
  filteredTodos: null,
  completedTodos: null,
  activeTodos: null,
  loading: false,
  error: "",
};
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await publicRequest.get();
  return response.data;
});
export const createTodo = createAsyncThunk("createTodo", async (form) => {
  const response = await publicRequest.post("/", {
    content: form,
  });

  return response.data;
});
export const updateTodo = createAsyncThunk("updateTodo", async (todo2) => {
  const response = await publicRequest.put("/" + todo2.id, todo2);
  return response.data;
});
export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {
  console.log(id);

  const response = await publicRequest.delete("/" + id);

  return response.data;
});
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    filterTodos: (state, action) => {
      if (action.payload === "active") {
        state.filteredTodos = state.activeTodos;
      } else if (action.payload === "completed") {
        state.filteredTodos = state.completedTodos;
      } else {
        state.filteredTodos = state.data;
      }
    },
    reset: (state) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.filteredTodos = action.payload;
      state.activeTodos = state.data.filter((item) => !item.isCompleted);
      state.completedTodos = state.data.filter((item) => item.isCompleted);
      state.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.error = "Error fetching todos";
      state.loading = false;
    });
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createTodo.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.error = "Error creating todos";
      state.loading = false;
    });
    builder.addCase(updateTodo.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateTodo.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.error = "Error updating todos";
      state.loading = false;
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = "Error deleting todos";
      state.loading = false;
    });
  },
});
export const { filterTodos, setUserName, reset } = todosSlice.actions;
export default todosSlice.reducer;
