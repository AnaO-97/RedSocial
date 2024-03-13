import axios from "axios";
import * as ACTION from "./actionsTypes";

const { REACT_APP_URL_SERVER } = process.env;

export function createMyPost( postData, token ) {
    return ( async (dispatch) => { 
        let newPost = {};

        try {
            newPost = await axios.post(
                `${ REACT_APP_URL_SERVER }/post`,
                postData,
                {                
                    headers: 
                    {
                        // 'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }        
                }        
            );
                       
            dispatch({
                type    : ACTION.NEW_POST,
                payload : newPost.data
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error client : something was wrong" );
            }
        }
    });
}

export function getAllPosts( token ) {
    return ( async (dispatch) => { 
        let allPosts = {};

        try {
            allPosts = await axios.get(
                `${ REACT_APP_URL_SERVER }/post/all`,
                {                
                    headers: { 'Authorization': `Bearer ${token}` }
                }        
            );                     
                       
            dispatch({
                type    : ACTION.ALL_POST,
                payload : allPosts.data
            })

        } catch (error) {
            if( error.response )
                window.alert( `${Object.keys(error.response.data)[0]} : ${Object.values(error.response.data)[0]}` );
            else{
                console.log(error)
                window.alert( "Error client : something was wrong" );
            }
        }
    });
}