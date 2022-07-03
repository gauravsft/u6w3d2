import React from "react";
import { Button, Box } from '@chakra-ui/react';
import { AuthContext } from "../context/authContext";

export const Navbar = () => {
    const  { isAuth } = React.useContext(AuthContext);
    const  { callApi } = React.useContext(AuthContext);
    const  { toggleIsAuth } = React.useContext(AuthContext);
    
    return(
        <Box bg='black' w='100%' p={4} textAlign='right' >
            {
                isAuth ? <Button onClick={() => {toggleIsAuth()}} >Logout</Button> : <Button onClick={() => {callApi()}} >Login</Button>
            }
        </Box>
    )
}

