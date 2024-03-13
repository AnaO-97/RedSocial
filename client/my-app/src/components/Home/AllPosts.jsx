import styles from "./allPosts.module.css";
import { useEffect, useState } from "react";

function AllPost ( props ) {
    const { allPosts, userData } = props;
    const [ renderPosts, setRenderPosts ] = useState([]);

    const handleSettingsCard = ( userIdCard ) => {
        if( userIdCard === userData.id ){
            return(
                <>
                    <button className = { `material-symbols-outlined ${ styles.bttnCard }` }>
                        delete
                    </button>
                    <button className = { `material-symbols-outlined ${ styles.bttnCard }` }>
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
                    <div className = { styles.settings }>
                        { handleSettingsCard( post.UserId )}
                    </div>
                    <h3> { post.title } </h3>
                    <h6> { post.createdAt } </h6>
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