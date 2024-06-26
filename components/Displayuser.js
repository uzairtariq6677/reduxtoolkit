"use client";
import { removeUser } from "@/redux/Slice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";

const Displayuser = () => {
  const getdata = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      displayuser
      <div>
        {getdata.map((item) => (
          <div
            className="flex flex-row items-center max-w-[300px] bg-blue-300 "
            key={item.id}
          >
            <span className="bg-blue-300 pr-4 max-w-[500px] pt-1 px-2">
              {item.name}
            </span>
            <RxCross2
              className="ml-36 bg-red-500 w-fit"
              onClick={() => dispatch(removeUser(item.id))}
            ></RxCross2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Displayuser;
