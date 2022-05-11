import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "../../components/Layout/Title";
import { getDashboard } from "../../store/actions/dashboard";
import TotalCounts from "./TotalCounts";

const Dashboard = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getDashboard());
  }, []);

  return (
    <>
      <Title>Dashboard</Title>
      <TotalCounts />
    </>
  );
};

export default Dashboard;
