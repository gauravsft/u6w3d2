import React from "react";
import { AuthContext } from "../context/authContext";
import { Box, Button } from '@chakra-ui/react';

export const  ShowUser=()=> {
    const { tokenNumber } = React.useContext(AuthContext);
    const  { isAuth } = React.useContext(AuthContext);
    const  { loading } = React.useContext(AuthContext);

    return(
        loading ? (<Box textAlign='center'><Button isLoading ></Button></Box>) : (isAuth ? (<Box p={4} textAlign='center' >{`Token Number : ${tokenNumber} - Login Status : ${isAuth}`}</Box>) : (<Box p={4} textAlign='center' >{`Login Status : ${isAuth}`}</Box>))
    )
}