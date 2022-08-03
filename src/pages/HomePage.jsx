import React from "react";
import ProfileNavbar from '../components/ProfileNavbar';

import { Box, Button, Typography } from "@mui/material";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
        <ProfileNavbar/> 
            <Box sx={{width:"100%", textAlign:"center"}}>
                <Typography variant="h1" color="white">Ini Home Page :)</Typography>

                <Link to="/detail">
                    <Button varian="contained" sx={{backgroundColor:'white', fontWeight:'bold'}}>Detail</Button>
                </Link>
                
                <Link to="/">
                    <Button varian="contained" sx={{backgroundColor:'white', fontWeight:'bold', marginLeft:"5px"}}>Log Out</Button>
                </Link>
            </Box> 
        </>
    )
}

export default HomePage;