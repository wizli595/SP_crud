import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: true,
  post: [],
  err: "",
};
export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  return axios.get("http://localhost:3000/data").then((resp) => {
    return resp.data;
  });
});
export const addPost = createAsyncThunk("post/addPost", async (data) => {
  const resp = await axios.post("http://localhost:3000/data", data);
  return resp.data;
});
export const updateArt = createAsyncThunk("post/updateArt", async (data) => {
  const resp = await axios.put(`http://localhost:3000/data/${data.id}`, data);
  return resp.data;
});
export const delArt = createAsyncThunk("post/delArt", async (id) => {
  const resp = await axios.delete(`http://localhost:3000/data/${id}`);
  return resp.data;
});
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
      state.err = "";
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.err = action.error.message;
    });
    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.err = "";
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.err = action.error.message;
    });
    builder.addCase(updateArt.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateArt.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.err = "";
    });
    builder.addCase(updateArt.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.err = action.error.message;
    });
    builder.addCase(delArt.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(delArt.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.err = "";
    });
    builder.addCase(delArt.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.err = action.error.message;
    });
  },
});
export default postSlice.reducer;
