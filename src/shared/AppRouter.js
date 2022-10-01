import React from "react";
import { Routes, Route } from "react-router-dom";
import paths from "./paths";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.root} element={<div>Init</div>} />
    </Routes>
  );
};

export default AppRouter;
