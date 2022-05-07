import React from "react";
import {
  Routes as RoutesContainer,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Auth } from "../config/storage";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes = () => {
  function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = sessionStorage.getItem(Auth);
    let location = useLocation();

    if (!auth) {
      // Redirect them to the /login page
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  }

  return (
    <>
      <RoutesContainer>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </RoutesContainer>
    </>
  );
};

export default Routes;
