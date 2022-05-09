import React from "react";
import {
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";

import RequireAuth from "./RequireAuth";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Producer from "../pages/Producer";

const Routes = () => {

  return (
    <>
      <RoutesContainer>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/producer"
          element={
            <RequireAuth>
              <Producer />
            </RequireAuth>
          }
        />
      </RoutesContainer>
    </>
  );
};

export default Routes;
