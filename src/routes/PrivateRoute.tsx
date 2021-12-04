import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactElement;
};

const PrivateRoute: FC<Props> = ({ children }) => {
  const token = null;
  return token ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
