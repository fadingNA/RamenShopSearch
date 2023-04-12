import React, {useState} from "react";
import {Card} from "react-bootstrap";
import { ramen } from '../../../data/data'
import { getImageUrl } from '../../../data/utils';
import {Image} from "react-bootstrap";


export function Item({name, isPacked, onClick}) {
    return (
        <li className={'item'} onClick={onClick}>
            {name} , {isPacked && '🦭'}
        </li>
    )
}

export function List(){
    const listItems = ramen.map(ramen =>
        <li key={ramen.id}>
            <Image
            src={getImageUrl(ramen)}
            alt={ramen.name}/>
        <p>
            <b>
                {ramen.name}
                {' ' + ramen.taste + ' '}
                {' ' + ramen.rating + ' '}

            </b>
        </p>
        </li>
    );
    return <ul>{listItems}</ul>
}

export default function PackingList() {
    const [detail,setDetail] = useState(false);
    function clickHandle(){
        setDetail(!detail)
    }
    return (
        <>
            <br/>
            <Card.Title>Packing List</Card.Title>
            <br/>
            <Card body>

                <Item isPacked={true} name={'Tonkotsu Ramen'} onClick={clickHandle}/>
                {detail && <div className={'item-details'}>
                Details about Tokotsu Ramen</div>}
            </Card>
            <Card body> <Item isPacked={false} name={'Spicy Ramen'} onClick={clickHandle}/>
                {detail && <div className={'item-details'}>
                    Details About Spicy Ramen</div>}< /Card>
            <Card body> <Item isPacked={true} name={'Nonthachai T-Shirt'} onClick={clickHandle}/>
                {detail && <div className={'item-details'}>
                    Details Non T-Shirt</div>}</Card>

            <Card><List/></Card>
        </>
    )
}