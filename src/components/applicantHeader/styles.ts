import styled from "styled-components";
import _Text from "../typography/Text";
import { device } from '../../components/utils/sizes';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    height:44px;
    justify-content: space-between;
    margin-top: 24px;
    @media ${device.laptop} { 
        margin-top: 32px;
    }
`;
export const LeftWrapper = styled.div`
    display: flex;
    flex-flow: row;
`;
export const RightWrapper = styled.div`
    width: 523px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled(_Text)`
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    margin-left:16px;
`;
export const ArrowIcon = styled.img`
`;