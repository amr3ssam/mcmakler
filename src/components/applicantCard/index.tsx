/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState,useEffect} from "react";
import { Wrapper, BoldText, NormalText, BidText, BidWrapper, StatusWrapper, StatusText, Avatar, AvatarText} from './styles'
interface Props {

    /**
     *  props
     */
    initials?: string,
    name?: string,
    mobile?: number,
    email?: string,
    statusDate?: string,
    bid? : string

}
function index(props: Props) {
    const [color, setColor] = useState('#');


    useEffect(() => {
        var letters = 'BCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        setColor(color)
    },[]);
   /*  function getRandomColor() {
        var letters = 'BCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    } */
    return (
        <Wrapper>
            <Avatar randomColor={color}>
                <AvatarText randomColor={color}>{props.initials}</AvatarText>
            </Avatar>
            <BoldText> {props.name}</BoldText>
            <NormalText>{props.mobile}</NormalText>
            <NormalText>{props.email}</NormalText>
        
            <StatusWrapper>
                <StatusText>{props.statusDate}</StatusText>
            </StatusWrapper>
            {
                props.bid && <BidWrapper>
                    <BidText>bid {props.bid}</BidText>
                </BidWrapper>

            }
        </Wrapper>
    );
}

export default index;
