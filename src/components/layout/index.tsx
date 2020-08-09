import React, { ReactNode } from "react";
import { Reset } from "styled-reset";
import Footer from "../footer";
import Header from "../header";
import { OuterWrapper } from "./styles";
interface Props {
  
    /**
     * All other props
     */
    children: ReactNode
}

export default function Layout(props: Props) {
    return (
        <OuterWrapper>
            <Reset/>
            <Header />
            {props.children}
            <Footer  />
        </OuterWrapper>
    );
}
