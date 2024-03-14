import * as ACTION from "./actionsTypes";

export default function reducerPost ( state, type, payload ) {
    if ( type === ACTION.NEW_POST ){
        if( state.allPosts.length > 0 ){
            return({
                ...state,
                allPosts : [ payload, ...state.allPosts ]
            })
        }
        else{
            return({
                ...state,
                allPosts : [ payload ]
            })
        }
    }

    if ( type === ACTION.ALL_POST ){
        return({
            ...state,
            allPosts : [ ...payload ]
        })
    }
};