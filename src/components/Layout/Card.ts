import styled from "@emotion/styled";
import { Container } from "./Container"

interface Props {
  width: string;
  height: string;
  column?: boolean;
}

export const Card = styled(Container) <Partial<Props>>`
  background-color: #ffffff;
  flex-direction: ${props => props.column ? "column" : "row"};
  width: ${props => props.width};
  height: ${props => props.height};
`;