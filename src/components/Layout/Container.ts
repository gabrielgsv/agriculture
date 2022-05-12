import styled from '@emotion/styled';

interface Props {
  width: string;
  height: string;
  row?: boolean;
}

export const Container = styled.div<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0px;
  margin: 0px;
  border: 0px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;