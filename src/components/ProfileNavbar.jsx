import React from "react";
import {AppBar, Avatar, Container, Toolbar, Stack} from '@mui/material';
import logo from '../images/logo.png';

const Navbar = () =>{
    return(
        <>
        <AppBar position="static" sx={{backgroundColor:"black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack direction="row" spacing={2}>
                        <Avatar variant="square" src={logo}/>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    </>
    )
}

export default Navbar;