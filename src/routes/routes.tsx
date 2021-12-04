import React, { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "screens/Home/Home";
import Home from "screens/Login/Login";
import NotFound from "screens/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
