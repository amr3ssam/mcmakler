import styled from "styled-components";
import _Text from "../typography/Text";

export const Wrapper = styled.div<{ showBorder?: boolean }>`
    text-align:center;
    display: flex;
    flex-flow:column;
    align-items: center;
    width: 97px;
    height: 44px;
    border-right: ${props =>
    props.showBorder 
        ? " 1px solid #E6E6E6"
            : "none"};
   
`;

export const CountText = styled(_Text)`
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
`;

export const Text = styled(_Text)`
    font-size: 14px;
    line-height: 20px;
`;
export const LineWrapper = styled.div`
border: 1px solid #E6E6E6;
`;
