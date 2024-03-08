import reducerUser from "./reducerUser";

const stateInicial = {
    JWT_KEY : "",
    userData : {},
    updatedUserData : {}
};

function reducer (state = stateInicial, action){
    const { type, payload } = action;
    
    if( type.length > 0 ){     
        let newState = { };
        const [ , ENTITY ] = type.split("_")

        if( ENTITY === "USER" ) {
            newState = reducerUser( state, type, payload );
            state    = { ...newState };
           
            return({ ...state })
        }
        
        // if( ENTITY === "POST" )        
    }
    else{
        return({ ...state })
    }

}

export default reducer;