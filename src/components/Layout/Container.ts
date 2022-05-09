import styled from '@emotion/styled';

interface Props {
  width: string;
  height: string;
}

export const Container = styled.div<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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