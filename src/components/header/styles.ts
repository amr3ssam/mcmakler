import styled from "styled-components";
import _Text from "../typography/Text";
import { device } from '../../components/utils/sizes';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    height:35px;
    justify-content: space-between;
    margin-bottom: 21px;
    padding: 0px 16px;
    @media ${device.laptop} { 
        padding: 0px;
    }
`;

export const MobileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LeftWrapper = styled.div`
`;
export const RightWrapper = styled.div`
    width: 341px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ContactWrapper = styled.div`
`;
export const MenuIcon = styled.img`
    width : 32px;
`;
export const Logo = styled.img<{ isMobile?: boolean }>`
    width : 142px;
    height: 22px;
    margin-left: ${props => props.isMobile ? 0 : 32}px;

`;
export const Text = styled(_Text)`
    font-size: 16px;
    line-height: 24px;
    margin-left: 10px;
    font-weight: bold;
`;
