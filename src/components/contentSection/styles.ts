import styled from "styled-components";
import _Text from "../typography/Text";
import { device } from '../../components/utils/sizes';

export const Wrapper = styled.div`
    display: flex;
    flex-flow:column;
    margin-top: 4px;
    margin-bottom: 28px;
`;

export const CardsWrapper = styled.div`
    display:flex;
    overflow-x: auto;
    white-space: nowrap;
    @media ${device.laptop} { 
        display: flex;
        flex-flow:wrap;
    }
`;
export const Text = styled(_Text)`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
`;