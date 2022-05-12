import { Text } from '@chakra-ui/react';
import { Card } from '../../../components/Layout/Card';

interface IProps {
  name: string
  number: number
}

const Count = ({ name, number }: IProps) => {

  return (
    <Card width='300px' height="200px" column={true} margin='10px'>
      <p>{name}</p>
      <Text fontSize="40pt">{number}</Text>
    </Card>
  );
}

export default Count;