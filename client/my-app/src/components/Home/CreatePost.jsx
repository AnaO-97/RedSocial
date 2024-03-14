import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMyPost }  from "../../redux/actionsPosts";
import styles  from "./createPost.module.css";

function CreatePost ( props ) {
    const { token } = props;
    const dispatch  = useDispatch(); 
    
    const [ currentDate, ] = useState(new Date());

    const [ newPost, setNewPost ] = useState({
        title   : "",
        content : "",
    });

    const handleClickNo = ( event ) => {
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
        <>
        <form onSubmit  = { handleSubmit }
              className = { styles.formCreatePost }
        >
            <input name      = "createdAt"
                   type      = "text"
                   disabled
                   className = { styles.createdAt }
                   value     = { currentDate.toLocaleString().split(",")[0] }
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
                <button type      = "submit"
                        className = { styles.btnYes }
                >
                    <span className = "material-symbols-outlined">
                        done
                    </span>
                </button>
            </div>            
        </form>

        <button className = { styles.btnNo }
                onClick   = { handleClickNo }
        >
            <span className = "material-symbols-outlined">
                close
            </span>
        </button>
        </>
    )
}

export default CreatePost;