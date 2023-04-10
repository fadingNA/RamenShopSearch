import React, {useState,useEffect} from "react";
import {Button} from "react-bootstrap";


export default function Box({value, onClick}){
    return (<>
        <Button onClick={onClick}>
            {value}
        </Button>
        </>)
}