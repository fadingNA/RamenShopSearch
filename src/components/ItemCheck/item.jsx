import React from "react";
import {Card} from "react-bootstrap";


export function Item({name, isPacked}) {
    return (
        <li className={'item'}>
            {name} , {isPacked && '🦭'}
        </li>
    )
}

export default function PackingList() {
    return (
        <>
            <br/>
            <Card.Title>Packing List</Card.Title>
            <br/>
            <Card body> <Item isPacked={true} name={'Tonkotsu Ramen'}/> </Card>
            <Card body> <Item isPacked={false} name={'Spicy Ramen'}/>< /Card>
            <Card body> <Item isPacked={true} name={'Nonthachai T-Shirt'}/></Card>
        </>
    )
}