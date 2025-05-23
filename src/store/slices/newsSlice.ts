import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface NewsState {
  posts: Post[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// localStorage helpers
const loadPostsFromLocalStorage = (): Post[] => {
  const saved = localStorage.getItem("newsPosts");
  return saved ? JSON.parse(saved) : [];
};

const savePostsToLocalStorage = (posts: Post[]) => {
  localStorage.setItem("newsPosts", JSON.stringify(posts));
};

// initialState — используем один раз
const initialState: NewsState = {
  posts: loadPostsFromLocalStorage(),
  loading: "idle",
  error: null,
};

// Асинхронный экшен для загрузки новостей
export const fetchPosts = createAsyncThunk("news/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts ");
  return await response.json();
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addLocalPost: (state, action) => {
      state.posts.unshift(action.payload);
      savePostsToLocalStorage(state.posts);
    },
    removeLocalPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      savePostsToLocalStorage(state.posts);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.posts = [...state.posts, ...action.payload];
        savePostsToLocalStorage(state.posts);
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = "failed";
        state.error = "Ошибка загрузки новостей";
      });
  },
});

export const { addLocalPost, removeLocalPost } = newsSlice.actions;

export default newsSlice.reducer;
