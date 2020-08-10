import React from "react";
import { useTranslation } from 'react-i18next';
import { Wrapper, LeftWrapper, RightWrapper, Text} from './styles'
import CountCard from '../countCard'
import Icon from '../icon'
import withMobileFlag from "../utils/withMobileFlag";

interface SortedCount {
    name?: string,
    count?: number
}
interface Props{
    sortedCount?: Array<SortedCount>,
    isMobile: boolean;
}

const Index: React.FC<Props> = (props) => {
    //get the translation from Json files
    const { t } = useTranslation();
    // function to render count components with the right count
    function renderCount() {
        if (props.sortedCount && props.sortedCount.length > 0) {
            return props.sortedCount.map((item) => {
                return <CountCard count={item.count} name={item.name} showBorder={item.name !== "Others"?? true} />
            })
        } else {
            return null;
        }
    }
    return (
        <Wrapper>
            <LeftWrapper>
                <Icon src="/images/back.svg" />
                <Text>{t('applicants')}</Text>

            </LeftWrapper>
            <RightWrapper>
                {!props.isMobile ? renderCount() : null}
            </RightWrapper>
        </Wrapper>
    )
}

export default withMobileFlag(Index);
