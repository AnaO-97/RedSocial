// import dotenv from 'dotenv';
import axios from "axios";
import * as ACTION from "./actionsTypes";

// dotenv.config();
// const { URL_SERVER } = process.env;

export function registerUser( userData ) {
    return ( async (dispatch) => { 
        const URL_SERVER = "http://localhost:3001";
        const userRegister = await axios.post(`${URL_SERVER}/user/register`, userData);
        
        dispatch({
            type    : ACTION.NEW_USER,
            payload : userRegister.data
        })
    });
}