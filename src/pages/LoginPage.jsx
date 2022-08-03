import React from "react";
import {Box, TextField, Button} from "@mui/material"
import kemal from "../images/Kemal.png"
import {Link} from "react-router-dom";

const LoginPage = () => {
    return(
        <>  
            <Box sx={{backgroundImage:`url(${kemal})`, backgroundRepeat:'no-repeat', backgroundSize:'65vw 100vh', 
            width:"100%", height:"100%"}}>
                <Box sx={{width: "90vw",
                        height: "100vh",
                        backgroundColor:"black",
                        background:"linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, rgba(200, 200, 200, .3) 22.39%, rgba(0, 0, 0, 100) 42.6%, rgba(0, 0, 0, 100) 79.19%, rgba(0, 0, 0, 100) 104.86%)",
                        float:'right',
                        display:'flex',
                        flexDirection:'column',
                        gap:'1em',
                        margin: "0 auto"}}>

                    <TextField
                        id="outlined-name"
                        label="Email"
                        InputLabelProps={{style : {color : 'white'} }}
                        sx={{border: '1px solid white', width:"300px", margin: "200px 50px 0 800px"}}
                        />

                    <TextField
                        id="outlined-name"
                        label="Password"
                        type="password"
                        InputLabelProps={{style : {color : 'white'} }}
                        sx={{border: '1px solid white', width:"300px", margin: "0 50px 0 800px"}}
                        />  
                    <Link to="/home">
                        <Button variant="contained" sx={{backgroundColor:'red', fontWeight:'bold', width:"300px", margin: "0 50px 0 800px"}}>Login</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage;