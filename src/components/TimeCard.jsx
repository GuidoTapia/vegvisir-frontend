import React from "react";
import user from "../assets/user.svg";

export default function TimeCard(props) {
  return (
    <div className="relative">
      <button
        className={
          props.reserved
            ? "flex justify-center items-center rounded-md bg-gray-100 text-gray-600 border-gray-600"
            : props.selected
            ? "flex justify-center items-center rounded-md bg-indigo-600 text-white"
            : "flex justify-center items-center rounded-md border-indigo-600 text-indigo-600"
        }
        style={{ height: 40, width: 320, borderWidth: "1px" }}
        onClick={props.onClick}
      >
        <h3>{props.time}</h3>
      </button>
      {props.reserved && (
        <img
          src={user}
          alt="user"
          style={{ width: 24, height: 24, top: 8, left: 16 }}
          className="absolute"
        />
      )}
    </div>
  );
}
