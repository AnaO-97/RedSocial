import * as ACTION from "./actionsTypes";

export default function reducerPost ( state, type, payload ) {
    if ( type === ACTION.NEW_POST ){
        if( state.allPosts.length > 0 ){
            if( state.filterPosts.type === "myPosts" || state.filterPosts.type === "allPosts" ){
                return({
                    ...state,
                    allPosts    : [ payload, ...state.allPosts ],
                    filterPosts : {
                        ...state.filterPosts,
                        data : [ payload, ...state.filterPosts.data ]
                    },
                })
            }
        }
    }

    if ( type === ACTION.ALL_POST ){
        return({
            ...state,
            allPosts : [ ...payload ],
            filterPosts : {
                ...state.filterPosts,
                data : [ ...payload ]
            },
        })
    }

    if ( type === ACTION.FILTER_POST ){
        let auxiliary = [ ...state.allPosts ];
        const { filterQuery, filterValue } = payload;

        if( filterQuery === "allPosts" ){
            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...auxiliary ]
                }
            })
        }

        if( filterQuery === "author" ){
            auxiliary = state.allPosts.filter(( post ) => post.User.fullName === filterValue)

            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...auxiliary ]
                }
            })
        }

        if( filterQuery === "title" ||filterQuery === "createdAt" ){
            auxiliary = state.allPosts.filter(( post ) => post[ filterQuery ] === filterValue)

            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...auxiliary ]
                }
            })
        }

        if( filterQuery === "myPosts" ){
            auxiliary = state.allPosts.filter(( post ) => post.UserId === state.userData.id)
            
            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...auxiliary ]
                }
            })            
        }
    }

    if ( type === ACTION.MODIFY_POST ){
        let postUpdated = state.filterPosts.data.filter(( post )=> post.id === payload.id );
        let withoutPostUpdated = state.filterPosts.data.filter(( post )=> post.id !== payload.id );
        let withoutPostUpdatedAll = state.allPosts.filter(( post )=> post.id !== payload.id );
        
        postUpdated = { ...payload };
        
        return({
            ...state,
            allPosts : [ postUpdated, ...withoutPostUpdatedAll ],
            filterPosts : {
                ...state.filterPosts,
                data : [ postUpdated, ...withoutPostUpdated ],
            }
        })
    }

    if ( type === ACTION.DELETE_POST ){
        const withoutPostDeletedAll = state.allPosts.filter(( post )=> post.id !== payload.id );
        const withoutPostDeleted = state.filterPosts.data.filter(( post )=> post.id !== payload.id );
        
        return({
            ...state,
            allPosts : [ ...withoutPostDeletedAll ],
            filterPosts: {
                ...state.filterPosts,
                data : [ ...withoutPostDeleted ]
            }
        })
    }
};