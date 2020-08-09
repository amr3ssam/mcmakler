import React from "react";
import { ClipLoader } from "react-spinners";
import { LoadingWrapper } from './styles'
import Text from '../typography/Text'
interface Props {

    /**
     * All other props
     */
    loading?: boolean
}
function index(props:Props) {
    return (
        <LoadingWrapper>
            <ClipLoader loading={props.loading} />
            <Text>
                Loading..
                        </Text>
        </LoadingWrapper>
    );
}

export default index;
