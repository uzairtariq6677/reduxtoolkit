// store.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice'; // corrected import
import todoreducer from './Todoslice'
export const store = configureStore({
  reducer: {
    users: userReducer,
    todo:todoreducer, // corrected to reference the correct reducer
  }
});
