import axios from "axios";
import * as ACTION from "./actionsTypes";

const { REACT_APP_URL_SERVER } = process.env;

export function registerUser( userData ) {
    return ( async (dispatch) => { 
        let userRegister = {};

        try {
            userRegister = await axios.post(`${ REACT_APP_URL_SERVER }/user/register`, userData);
                       
            dispatch({
                type    : ACTION.NEW_USER,
                payload : userRegister.data
            })

        } catch (error) {
            window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
        }
    });
}

export function loginUser( userData ) {
    return ( async (dispatch) => { 
        let userLogin = {};

        try {
            userLogin = await axios.post(`${ REACT_APP_URL_SERVER }/user/login`, userData);
                       
            dispatch({
                type    : ACTION.LOGIN_USER,
                payload : userLogin.data
            })

        } catch (error) {
            window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
        }
    });
}