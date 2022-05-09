import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Auth } from "../config/storage";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = sessionStorage.getItem(Auth);
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Sidebar>{children}</Sidebar>;
}

export default RequireAuth;
