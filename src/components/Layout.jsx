import React from "react";
import Mark from "../assets/Mark.svg";
import user from "../assets/user.svg";

export default function Layout() {
  return (
    <div className="flex justify-between items-center w-screen h-16 bg-gray-800 px-4">
      <div />
      <img src={Mark} alt="logo" style={{ width: 32, height: 32 }} />
      <img src={user} alt="user" style={{ width: 32, height: 32 }} />
    </div>
  );
}
