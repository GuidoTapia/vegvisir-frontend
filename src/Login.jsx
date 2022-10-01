import React from "react";
import { useState } from "react";
import Mark from "./assets/Mark.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    console.log(email);
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-gray-50 px-4 py-12 rounded-lg justify-center items-center">
        <img
          src={Mark}
          className="mb-3 mx-0"
          alt="logo"
          style={{ width: 48, height: 48 }}
        />
        <h1 className="text-3xl leading-9 font-extrabold mb-4">
          Sign in to your account
        </h1>
        <div className="w-full mb-3">
          <input
            className="flex flex-col border-2 rounded-t-lg py-1 px-2 w-full"
            placeholder="Email address"
            onChange={handleChangeEmail}
          />
          <input
            className="flex flex-col border-2 border-t-0 rounded-b-lg py-1 px-2 w-full"
            placeholder="Password"
            type="password"
            onChange={handleChangePassword}
          />
        </div>
        <div className="flex mb-3 justify-between w-full">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" /> Remember
            me
          </label>
          <a href="url" className="text-indigo-600">
            Forgot your password?
          </a>
        </div>
        <button className="bg-indigo-600 w-full py-2 text-white text-sm leading-5 font-medium rounded-md">
          Sign in
        </button>
      </div>
    </div>
  );
}
