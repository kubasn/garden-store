import React from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/use-typed-selector";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useTypedSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
