import React from "react";
import ProfileNavbar from '../components/ProfileNavbar';

import { Box, Button, Typography } from "@mui/material";
import {Link} from "react-router-dom";

const DetailPage = () => {
    return (
        <>
        <ProfileNavbar/>
            <Box sx={{width:"100%", textAlign:"center"}}>
                <Typography variant="h1" color="white">Ini Detail Page.</Typography>
                <Typography variant="h2" color="white">Maaf film sedang kosong.</Typography>
                <Typography variant="h3" color="white" sx={{marginBottom:"20px"}}>Datang lagi lain kali.</Typography>

                <Link to="/home">
                    <Button varian="contained" sx={{backgroundColor:'white', fontWeight:'bold'}}>Home</Button>
                </Link>
                
                <Link to="/">
                    <Button varian="contained" sx={{backgroundColor:'white', fontWeight:'bold', marginLeft:"5px"}}>Log Out</Button>
                </Link>
            </Box> 
        </>
    )
}

export default DetailPage;