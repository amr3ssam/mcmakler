import styled from "styled-components";
import { ReactNode } from "react";

export default styled.h5<{ color?: string; children: ReactNode }>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  color: ${props => (props.color ? props.color : "inherit")};
`;
