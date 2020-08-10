import React from "react";
import { Wrapper,CountText, Text } from './styles'

interface Props {
    /**
     *  props
     */
    count?: number,
    name?: string,
    showBorder?: boolean

}

function index(props: Props) {
    return (
        <Wrapper showBorder={props.showBorder}>
            <CountText>{props.count}</CountText>
            <Text>{props.name}</Text>
        </Wrapper>
    );
}


export default index;
