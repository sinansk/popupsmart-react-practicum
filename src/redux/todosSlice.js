import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../utils";
const initialState = {
  userName: "",
  data: null,
  loading: false,
  error: "",
};
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await publicRequest.get();
  return response.data;
});
export const createTodo = createAsyncThunk("createTodo", async (form) => {
  console.log("REDUX", form);
  const response = await publicRequest.post("/", {
    content: form,
  });

  return response.data;
});
export const updateTodo = createAsyncThunk("updateTodo", async (id) => {
  const response = await publicRequest.put("/" + id);
  return response.data;
});
export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {
  console.log(id);

  const response = await publicRequest.delete("/" + id);
  console.log(response.data, "delete");
  return response.data;
});
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.error = "Error fetching todos";
      state.loading = false;
    });
    builder.addCase(createTodo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.error = "Error creating todos";
      state.loading = false;
    });
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = "Error updating todos";
      state.loading = false;
    });
    builder.addCase(deleteTodo.pending, (state, action) => {
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

export default todosSlice.reducer;
