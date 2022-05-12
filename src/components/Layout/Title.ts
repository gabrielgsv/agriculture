import styled from '@emotion/styled';

interface Props {
  center: boolean;
}

export const Title = styled.h1 <Partial<Props>>`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  width: 100%;
  text-align: ${props => props.center ? 'center' : 'left'};
`;
