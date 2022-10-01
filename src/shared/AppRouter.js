import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import paths from "./paths";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.login} element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
