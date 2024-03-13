import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMyPost }  from "../../redux/actionsPosts";
import styles  from "./createPost.module.css";
import AllPost from "./AllPosts";

function CreatePost ( props ) {
    const { token } = props;
    const dispatch  = useDispatch();   

    const [ newPost, setNewPost ] = useState({
        title   : "",
        content : "",
    });

    const handleClick = ( event ) => {
        setNewPost({
            title   : "",
            content : "",
        })
    }

    const handleSubmit =  ( event ) => {
        event.preventDefault();
        dispatch(createMyPost( newPost, token ));

        setNewPost({
            title   : "",
            content : ""
        })
    }

    const handleChange = ( event ) => {
        const { name, value } = event.target;

        setNewPost({
            ...newPost,
            [ name ] : value,
        })
    }

    return(
        // <form className = { styles.formCreatePost }>
        <form onSubmit  = { handleSubmit }
              className = { styles.formCreatePost }
        >
            <input name       = "createdAt"
                    type      = "date"
                    disabled
                    className = { styles.createdAt }
                //    value     = { userData.email }
                //    onChange  = { handleChange }
            />
            
            <input name         = "title"
                   type         = "text"
                   placeholder  = "Post title ..."
                   autoComplete = "off"
                   className    = { styles.title }
                   value        = { newPost.title }
                   onChange     = { handleChange }
            />
            
            <textarea name        = "content" 
                      rows        = "10" 
                      cols        = "45"
                      placeholder = "Write something you want to share"
                      className   = { styles.content }
                      value       = { newPost.content }
                      onChange    = { handleChange }
            />

            <div className = { styles.submitContainer }>
                <button className = { styles.btnNo }
                        onClick   = { handleClick }
                >
                    <span className = "material-symbols-outlined">
                        close
                    </span>
                </button>

                <button type      = "submit"
                        className = { styles.btnYes }
                >
                    <span className = "material-symbols-outlined">
                        done
                    </span>
                </button>
            </div>            
        </form>
    )
}

export default CreatePost;