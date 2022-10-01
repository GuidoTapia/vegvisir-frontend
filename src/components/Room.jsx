import React from "react";

export default function Room(props) {
  return (
    <button
      className="flex justify-center items-center border-4 border-indigo-600"
      style={{ height: props.height ?? 120, width: props.width ?? 120 }}
      onClick={props.onClick}
    >
      <h3>{props.label}</h3>
    </button>
  );
}
