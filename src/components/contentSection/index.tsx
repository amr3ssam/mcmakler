import React from "react";
import ApplicantCard from "../applicantCard";
import { Wrapper,  Text, CardsWrapper} from './styles'
interface Props {

    /**
     *  props
     */
    name?: string,
    data?: Array<any>,

}
function index(props: Props) {
    function renderCard() {
        if (props.data && props.data.length > 0) {
            return props.data.map((item) => {
                return <ApplicantCard
                    initials={item.firstname.trim().charAt(0) + item.lastname.trim().charAt(0) }
                    name={item.firstname + " " + item.lastname}
                    mobile={item.mobile}
                    email={item.email} bid={item.bid}
                    statusDate={item.date} />
            })
        } else {
            return null;
        }   
    }
    return (
        <Wrapper>
            <Text>
                {props.name} ({props.data?.length})
            </Text>
            <CardsWrapper>
                {renderCard()}
            </CardsWrapper>
       </Wrapper>
    );
}

export default index;
