import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Nav} from "react-bootstrap";
import Link from "next/link";
import {Button} from "react-bootstrap"
import React from "react";
import {Box, IconButton, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, tokens} from "@/components/dashboard/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function NavMain() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (

        <Box display={'flex'} justifyContent={"space-between"} p={2}>
            <Box display={'flex'}
                 background={colors.primary[400]}
                 borderRadius={'3px'}>
                <InputBase
                    sx={{ml: 2, flex: 1}} placeholder={"Search"}/>
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

        </Box>

    )
}

//<Navbar bg={'dark'} expand={'lg'} variant={'dark'}>
//                 <Container fluid>
//                     <Navbar.Brand href={'/'}>News CNC</Navbar.Brand>
//                     <Navbar.Toggle aria-controls={'navBarScroll'}/>
//                     <Navbar.Collapse>
//                         <Nav className={'me-auto my-2 my-lg-0'}
//                              style={{maxHeight: '100px'}}
//                              navbarScroll>
//                             <Link href={'/home'} passHref legacyBehavior>
//                                 <Nav.Link>
//                                     <Button variant={"outline-primary"}>ok</Button>
//                                 </Nav.Link>
//                             </Link>
//                             <Link href={'/news '} passHref legacyBehavior>
//                                 <Nav.Link>
//                                     <Button variant={'outline-info'}>News</Button>
//                                 </Nav.Link>
//                             </Link>
//                             <Link href={'/ramen'} passHref legacyBehavior>
//                                 <Nav.Link>
//                                     <Button variant={'outline-light'}>Ramen</Button>
//                                 </Nav.Link>
//                             </Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>