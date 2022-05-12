import { Card } from "../../../components/Layout/Card";
import { Box } from "@chakra-ui/react";
import { DashboardState } from "../../../store/types/dashboard";
import { useSelector } from "react-redux";
import { getUfData } from "./services";
import { Pie } from "@ant-design/plots";

const PieCharts = () => {
  const selector: DashboardState = useSelector((state: any) => state.Dashboard);
  const ufData: any = selector?.dashboardData && getUfData(selector.dashboardData)

  console.log('ufData', ufData)

  const config = {
    appendPadding: 10,
    data: ufData || [],
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    autoFit: true,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{percentage}',
      style: {
        fontSize: 9,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <>
      <Card minWidth="300px" column={true} margin='20px'>
        <p>Gráfico por estado(UF)</p>
        <Box width='90%'>
          <Pie {...config} />
        </Box>
      </Card>
    </>
  );
};

export default PieCharts;
