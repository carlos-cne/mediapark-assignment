import AuthContext from "context/provider/AuthProvider";
import React, { FC, ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactElement;
};

const PrivateRoute: FC<Props> = ({ children }) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
