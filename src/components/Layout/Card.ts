import styled from "@emotion/styled";
import { Container } from "./Container"

interface Props {
  width: string;
  height: string;
  column?: boolean;
  margin?: string;
}

export const Card = styled(Container) <Partial<Props>>`
  background-color: #ffffff;
  flex-direction: ${props => props.column ? "column" : "row"};
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  margin: ${props => props.margin};
`;