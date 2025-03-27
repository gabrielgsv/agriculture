import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DashboardState } from '../../../store/types/dashboard';
import { getTotalArea } from '../services';
import Count from './Count';

const TotalCounts = () => {
  const [totalFarms, setTotalFarms] = useState(0);
  const [totalArea, setTotalArea] = useState(0);

  const selector: DashboardState = useSelector((state: any) => state.Dashboard);

  useEffect(() => {
    if (selector) {
      const area = getTotalArea(selector.dashboardData);
      setTotalArea(area?.total_hectares);
      setTotalFarms(selector.totalFarms);
    }
  }, [selector])

  return (
    <Flex flexFlow='row wrap' justify='center' width='100%'>
      <Count name='Total de fazendas:' number={totalFarms} />
      <Count name='Total de área em hectares:' number={totalArea} />
    </Flex>
  );
};

export default TotalCounts;
