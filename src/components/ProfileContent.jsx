import React from "react";
import {Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import add from "../images/Add.png"
import murat from "../images/Murat.png"
import umut from "../images/Umut.png"
import kemal from "../images/Kemal.png"
import cocuk from "../images/Cocuk.png"
import managedBtn from "../images/ManageBtn.png"

import {Link} from "react-router-dom";

const images = [murat, umut, kemal, cocuk, add];
const profileName = ['Murat', 'Umut', 'Kemal', 'Cocuk', 'Other'];

const ProfileContent = () => {
    return(
        <>
            <Box sx={{width:'100%', backgroundColor:'black'}}>
                <Box sx={{marginBottom:'50px', textAlign:'center'}}> 
                    <Typography variant='h2' sx={{color:'white'}}>Who’s watching?</Typography>
                </Box>

                <Link to="/login">
                    <Card sx={{backgroundColor:'transparent', padding:'10px 50px 0 50px'}}>
                            
                        <Box sx={{ margin:'0 auto',
                            display:'flex', 
                            flexDirection:'row', 
                            alignItems:'center', gap:'2em'}}>

                            {images.map((image) => (
                                <CardMedia 
                                component="img"
                                sx={{ width: 151, flex: '1 0 auto' }}
                                image={image}
                                alt="add"/>
                            ))}
                        </Box>

                        <Box sx={{ margin:'0 auto',
                            display:'flex', 
                            flexDirection:'row', 
                            alignItems:'center', gap:'2em', textAlign:'center'}}>

                            {profileName.map((name) => (
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography variant="subtitle1" color="white" component="div">
                                        {name}
                                    </Typography>
                                </CardContent>   
                            ))} 
                        </Box>
                    </Card> 
                </Link>

                <Box sx={{marginTop:'50px', textAlign:'center'}}> 
                    <img src={managedBtn} alt="managed"/>
                </Box>
            </Box>
        </>
    )
}

export default ProfileContent;