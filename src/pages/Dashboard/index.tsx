import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../components/Layout/Container";
import { Title } from "../../components/Layout/Title";
import { getDashboard } from "../../store/actions/dashboard";
import PieCharts from "./PieCharts";
import TotalCounts from "./TotalCounts";

const Dashboard = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getDashboard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>Dashboard</Title>
      <TotalCounts />
      <PieCharts />
    </Container>
  );
};

export default Dashboard;
