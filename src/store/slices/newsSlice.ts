import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface NewsState {
  posts: Post[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchPosts = createAsyncThunk("news/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    posts: [],
    loading: "idle",
    error: null,
  } as NewsState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = "failed";
        state.error = "Ошибка загрузки новостей";
      });
  },
});

export default newsSlice.reducer;
