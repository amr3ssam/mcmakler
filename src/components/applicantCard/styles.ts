import styled from "styled-components";
import _Text from "../typography/Text";

export const Wrapper = styled.div`
    text-align:center;
    display: flex;
    flex-flow:column;
    align-items: center;
    height: 241px;
    min-width: 305px;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 4px;
    padding-top: 24px;
    margin-right: 24px;
    margin-top: 24px;
`;
export const BoldText = styled(_Text)`
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
`;
export const NormalText = styled(_Text)`
    font-size: 16px;
    line-height: 24px;
`;
export const BidText = styled(_Text)`
   font-size: 12px;
   line-height: 10px;
   font-weight: bold;
   color: #FFFFFF;
   text-transform: uppercase;
   
`;
export const BidWrapper = styled.div`
    background: #FEB902;
    border-radius: 3px;
    padding: 4px 8px;
    margin-top: 8px;
`;

export const StatusWrapper = styled.div`
    background: #9D9D9D;
    border-radius: 3px;
    padding: 4px 8px;
`;
export const StatusText = styled(_Text)`
   font-size: 12px;
   line-height: 10px;
   font-weight: bold;
   color: #FFFFFF;
   text-transform: uppercase;
   
`;
export const Avatar = styled.div<{ randomColor?: string }>`
 vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color:  ${props => props.randomColor};
  color: ${props => props.randomColor};
`;
export const AvatarText = styled(_Text)<{ randomColor?: string }>`
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;
   color: ${props => props.randomColor};
   filter: brightness(0.5);
   text-transform: uppercase;
   margin: 30% auto;
   
`;