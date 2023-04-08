import NavMain from "@/components/navbar/navbar";
import React from "react";
import Container from "react-bootstrap/Container";

export default function Layout(props){
    return (
        <React.Fragment>
            <NavMain/>
            <br/>
            <Container>
                {props.children}
            </Container>
        </React.Fragment>


    )
}