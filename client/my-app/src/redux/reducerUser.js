import * as ACTION from "./actionsTypes";

export default function reducerUser ( state, type, payload ) {
    if ( type === ACTION.NEW_USER || type === ACTION.LOGIN_USER){
        return({
            ...state,
            JWT_KEY : payload.token,
            userData: payload.userData,
        })
    }

    if ( type === ACTION.MODIFY_USER){
        return({
            ...state,
            userData: payload,
        })
    }
};