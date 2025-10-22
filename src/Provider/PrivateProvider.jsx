import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>loading</p>;
  }
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
};

export default PrivateProvider;
