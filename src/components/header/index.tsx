import React from "react";
import { Wrapper, MenuIcon, Logo, LeftWrapper, RightWrapper, Text, ContactWrapper, MobileWrapper} from './styles'
import Icon from '../icon'
import withMobileFlag from "../utils/withMobileFlag";

interface Props {
    isMobile: boolean;
}

function index(props: Props) {
    return (
        <Wrapper>
            {!props.isMobile ? 
                <LeftWrapper>
                    <MenuIcon src="/images/menu.svg" />
                    <Logo src="/images/logo.png" />
                </LeftWrapper>
               
                :
                <MobileWrapper>
                    <MenuIcon src="/images/menu.svg" />
                    <Logo src="/images/logo.png" isMobile={props.isMobile} />
                    <Icon src="/images/active.svg" />
                </MobileWrapper>
               
            }
            {
                !props.isMobile ?
                    <RightWrapper>
                        <ContactWrapper>
                            <Icon src="/images/ic-contact_support.svg" />
                            <Text>Contact Support</Text>
                        </ContactWrapper>

                        <Icon src="/images/active.svg" />
                        <Icon src="/images/ic-user.svg" />
                        <Icon src="/images/ic-power_settings_new.svg" />

                    </RightWrapper>
                    : 
                    null
            }
          
        </Wrapper>
    );
}
export default withMobileFlag(index);

