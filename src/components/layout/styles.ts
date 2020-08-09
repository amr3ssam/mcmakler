import styled from "styled-components";
import { device } from '../../components/utils/sizes';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  background-color: #E5E5E5;
  padding: 16px 0px;
  
  @media ${device.laptop} { 
    padding: 24px 50px;
  }
`;

