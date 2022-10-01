import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Areas from "../screens/Areas";
import Times from "../screens/Times";
import Welcome from "../screens/Welcome";
import paths from "./paths";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.welcome} element={<Welcome />} />
      <Route path={paths.times} element={<Times />} />
      <Route path={paths.areas} element={<Areas />} />
    </Routes>
  );
};

export default AppRouter;
