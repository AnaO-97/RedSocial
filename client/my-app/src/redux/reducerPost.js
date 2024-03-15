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

    if ( type === ACTION.MODIFY_POST ){
        let allPostsUpdated = state.allPosts.filter(( post )=> post.id !== payload.id );
        let postUpdated = state.allPosts.filter(( post )=> post.id === payload.id );
        postUpdated = { ...payload };
        
        return({
            ...state,
            allPosts : [ postUpdated, ...allPostsUpdated ]
        })
    }

    if ( type === ACTION.DELETE_POST ){
        let withoutPostDeleted = state.allPosts.filter(( post )=> post.id !== payload.id );
        
        return({
            ...state,
            allPosts : [ ...withoutPostDeleted ]
        })
    }
};