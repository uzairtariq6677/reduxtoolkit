"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/Slice"; // corrected import
import Link from "next/link";

const AddUser = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const userDispatch = () => {
    if (name.trim() === "") {
      setError(true);
    } else {
      dispatch(addUser(name));
      setName(''); // clear the input field after dispatch
      setError(false); // reset error state
    }
  };

  return (
    <div className="pl-3">
      <div className="text-2xl font-semibold">UserList</div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter new user"
          value={name} // bind input field to state
          onChange={(e) => setName(e.target.value)}
          className={`border ${error ? 'border-red-500' : 'border-gray-300'} max-w-[200px]`}
        />
        {error && <span className="text-red-500">You did not enter a name</span>}
        <button className="bg-red-600 w-fit p-2 text-white" onClick={userDispatch}>
          ADD user
        </button>
        <Link href='/removeuser' >Remove user</Link>
       
        <Link href='/todolist' >todo</Link>
        <Link href='/apiusers' >apiuserlist</Link>
      </div>
    </div>
  );
};

export default AddUser;
