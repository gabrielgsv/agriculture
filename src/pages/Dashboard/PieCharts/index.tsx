import { DashboardState } from '../../../store/types/dashboard';
import { useSelector } from 'react-redux';
import { getAreaData, getCropsData, getUfData } from './services';
import Chart from './Chart';
import { Flex } from '@chakra-ui/react';

const PieCharts = () => {
  const selector: DashboardState = useSelector((state: any) => state.Dashboard);
  const ufData: any = selector?.dashboardData && getUfData(selector.dashboardData)
  const cropsData: any = selector?.dashboardData && getCropsData(selector.dashboardData)
  const areaData: any = selector?.dashboardData && getAreaData(selector.dashboardData)

  return (
    <Flex flexFlow='row wrap' justify='center' width='100%'>
      <Chart name='Estado(UF):' data={ufData} />
      <Chart name='Cultura:' data={cropsData} />
      <Chart name='Uso do Solo:' data={areaData} />
    </Flex>
  );
};

export default PieCharts;
