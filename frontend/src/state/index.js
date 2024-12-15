import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the auth slice
const initialState = {
  mode: "light", // Theme mode (light or dark)
  user: null, // User information
  token: null, // Authentication token
  posts: [], // Array to store posts
};

// Create the auth slice using createSlice from Redux Toolkit
export const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer to toggle between light and dark mode
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    // Reducer to handle user login
    setLogin: (state, action) => {
      state.user = action.payload.user; // Set user information
      state.token = action.payload.token; // Set authentication token
    },
    // Reducer to handle user logout
    setLogout: (state) => {
      state.user = null; // Clear user information
      state.token = null; // Clear authentication token
    },
    // Reducer to update user's friends list
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    // Reducer to set all posts
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    // Reducer to update a single post
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

// Export individual action creators
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;

// Export the reducer
export default authSlice.reducer;
