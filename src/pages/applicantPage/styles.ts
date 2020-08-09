import styled from "styled-components";
import { device } from '../../components/utils/sizes';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background-color: #ffffff;
  padding: 0px 20px;
`;
export const FilterWrapper = styled.div`
   
    padding-top: 20px;
    margin-bottom:28px;
    display: flex;
    flex-direction: column;


  @media ${device.laptop} { 
    height: 45px;
    display: flex;
    flex-direction: row;
  }

`;
export const DropDownWrapper = styled.div`
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 60%;
  @media ${device.laptop} { 
    width: 220px;
    margin-left: 24px;
    margin-top: 0px;

  }

`;

export const SearchWrapper = styled.div`
  height: 45px;
  width: 100%;
  @media ${device.laptop} { 
    width: 305px;

  }
`;

