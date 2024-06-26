// slice.js
"use client";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // users: []
users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
    
      const data = {
        id: nanoid(),
        name: action.payload // corrected to action.payload
      };
      state.users.push(data);
      let user=JSON.stringify(state.users)
      localStorage.setItem('users',user)
    },
    removeUser:(state,action)=>{
     const data=state.users.filter((item)=>{
        return item.id!==action.payload
     })
     state.users=data
     let user=JSON.stringify(data)
     localStorage.setItem('users',user)
    }

    
  }
});

export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
