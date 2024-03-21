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
            else{
                return({
                    ...state,
                    allPosts : [ payload, ...state.allPosts ],                
                })
            }
        }
        else{
            return({
                ...state,
                allPosts    : [ payload ],
                filterPosts : {
                    ...state.filterPosts,
                    data : [ payload ]
                },
            })
        }
    }

    if ( type === ACTION.ALL_POST ){
        const { allPostsData, favoritesData } = payload;
        const ids = favoritesData.secondEntities.map( favorite => favorite.id );
        
        // console.log("allPostsData", allPostsData.length)
        // console.log("favoritesData", favoritesData.secondEntities.length)

        return({
            ...state,
            allPosts    : [ ...allPostsData ],
            myFavorites : {
                idPosts : [ ...ids ],
                data    : [ ...favoritesData.secondEntities ],
            },           
            filterPosts : {
                ...state.filterPosts,
                data : [ ...allPostsData ]
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
            auxiliary = state.allPosts.filter(( post ) => post.User.fullName.toLowerCase().includes( filterValue.toLowerCase() ));

            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...auxiliary ]
                }
            })
        }

        if( filterQuery === "title" ){
            auxiliary = state.allPosts.filter(( post ) => post.title.toLowerCase().includes( filterValue.toLowerCase() ));

            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...auxiliary ]
                }
            })
        }

        if( filterQuery === "createdAt" ){
            auxiliary = state.allPosts.filter(( post ) => post.createdAt.includes( filterValue ))

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

        if( filterQuery === "myFavorites" ){  
            console.log(state.myFavorites.data.length);
            return({
                ...state,
                filterPosts : {
                    type : filterQuery,
                    value: filterValue,
                    data : [ ...state.myFavorites.data ]
                }
            })            
        }
    }

    if ( type === ACTION.MODIFY_POST ){
        const { idBefore, postAfter } = payload;

        let postUpdated = state.filterPosts.data.filter(( post )=> post.id === idBefore );
        let withoutPostUpdated = state.filterPosts.data.filter(( post )=> post.id !== idBefore );
        let withoutPostUpdatedAll = state.allPosts.filter(( post )=> post.id !== idBefore );
        
        postUpdated = { ...postAfter };
        
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
        const withoutPostDeletedFav = state.myFavorites.data.filter(( post )=> post.id !== payload.id );
        const withoutPostDeleted = state.filterPosts.data.filter(( post )=> post.id !== payload.id );
        
        return({
            ...state,
            allPosts   : [ ...withoutPostDeletedAll ],
            myFavorites: {
                ...state.myFavorites,
                data : [ ...withoutPostDeletedFav ],
            },
            filterPosts: {
                ...state.filterPosts,
                data : [ ...withoutPostDeleted ]
            }
        })
    }
};