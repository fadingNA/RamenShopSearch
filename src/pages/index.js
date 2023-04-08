import React from "react";
import {Col, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Link from "next/link";

import {Card} from "react-bootstrap";

export default function Home() {
    return (
        <>

                <Row>
                    <Image
                        src="https://i.ibb.co/W0DfdMZ/danis-lou-jf-Zfd-Qtc-H6k-unsplash.jpg"
                        alt="Building" className="img-fluid rounded"/>
                    <Col md={6} className={'display-5 justify-content-end'}>
                        <Link href={'/home'} passHref legacyBehavior className={'text-white'}>
                            <Card>
                                <Card.Body>
                                    Welcome to Ramen fan site
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <br/>
                    <br/>
                    <br/>
                    <Col md={6}>

                    </Col>
                    <br/><br/>
                </Row>

        </>)
}