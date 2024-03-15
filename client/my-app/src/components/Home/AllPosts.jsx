import styles from "./allPosts.module.css";
import { useEffect, useState } from "react";

function AllPost ( props ) {
    const { allPosts, 
            userData,
            handleDeletePost,
            handleModifyPost,
    } = props;
    
    const [ renderPosts, setRenderPosts ] = useState([]);

    const handleSettingsCard = ( userIdCard, postId ) => {
        if( userIdCard === userData.id ){
            return(
                <>
                    <button id        = { postId }
                            className = { `material-symbols-outlined ${ styles.bttnCard }` }
                            onClick   = { handleDeletePost }
                    >
                        delete
                    </button>                    

                    <button id        = { postId }
                            className = { `material-symbols-outlined ${ styles.bttnCard }` }
                            onClick   = { handleModifyPost }
                    >
                        edit
                    </button>  
                </>
            )
        }
    }

    useEffect(()=>{
        setRenderPosts([ ...allPosts ])
    }, [ allPosts ])

    return(
    <div className = { styles.allPostsContainer }>
        {
            renderPosts.map(( post )=>{
            return(
            <div key = { post.id }>
            <div className = { styles.cardPost }>
                <div className = { styles.headCard }>
                    <div className = { styles.settings }
                         style     = {{ backgroundColor : `${ userData.color }80`}}
                    >
                        { handleSettingsCard( post.UserId, post.id )}
                    </div>
                    <h3> { post.title } </h3>
                    <h6> { post.createdAt.split("T")[0] } </h6>
                </div>
                
                <p> { post.content } </p>
                
                <div className = { styles.footerCard }
                     style     = {{ backgroundColor : `${ post.User.color }` }}
                >
                    <h6> { post.User.fullName } </h6>
                    <button className = { `material-symbols-outlined ${ styles.bttnCard }` }>
                        favorite
                    </button>
                </div>
            </div>

            <hr />
            </div> 
            );})
        }
    </div>
    );
}

export default AllPost;