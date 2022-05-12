import { Pie } from '@ant-design/plots';
import { Box, Text } from '@chakra-ui/react';
import { Card } from '../../../components/Layout/Card';

interface IProps {
  name: string,
  data: any,
}

const Chart = ({ name, data }: IProps) => {
  const config = {
    appendPadding: 5,
    data: data || [],
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    autoFit: true,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{percentage}',
      style: {
        fontSize: 12,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
    ],
  };

  return (
    <Card width='500px' maxWidth='100%' column={true} margin='10px'>
      <Text fontSize='18pt' marginTop={5} fontWeight='bold'>{name}</Text>
      <Box width='100%'>
        <Pie {...config} />
      </Box>
    </Card>
  );
};

export default Chart;
