import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Nav} from "react-bootstrap";
import Link from "next/link";
import {Button} from "react-bootstrap"
import React from "react";

export default function NavMain() {
    return (
        <>
            <Navbar bg={'dark'} expand={'lg'} variant={'dark'}>
                <Container fluid>
                    <Navbar.Brand href={'/'}>News CNC</Navbar.Brand>
                    <Navbar.Toggle aria-controls={'navBarScroll'}/>
                    <Navbar.Collapse>
                        <Nav className={'me-auto my-2 my-lg-0'}
                             style={{maxHeight: '100px'}}
                             navbarScroll>
                            <Link href={'/home'} passHref legacyBehavior>
                                <Nav.Link>
                                    <Button variant={"outline-primary"}>ok</Button>
                                </Nav.Link>
                            </Link>
                            <Link href={'/news '} passHref legacyBehavior>
                                <Nav.Link>
                                    <Button variant={'outline-info'}>News</Button>
                                </Nav.Link>
                            </Link>
                            <Link href={'/ramen'} passHref legacyBehavior>
                                <Nav.Link>
                                    <Button variant={'outline-light'}>Ramen</Button>
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}