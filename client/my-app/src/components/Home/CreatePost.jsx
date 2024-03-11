import styles from "./createPost.module.css";
import AllPost from "./AllPosts";

function CreatePost () {
    return(
        <form className = { styles.formCreatePost }>
        {/* <form onSubmit = { handleSubmit }> */}
            <input name       = "createdAt"
                    type      = "date"
                    disabled
                    className = { styles.createdAt }
                //    value     = { userData.email }
                //    onChange  = { handleChange }
            />
            
            <input name          = "title"
                    type         = "text"
                    placeholder  = "Post title ..."
                    autoComplete = "off"
                    className    = { styles.title }
                //    value        = { userData.email }
                //    onChange     = { handleChange }
            />
            
            <textarea name          = "content" 
                        rows        = "10" 
                        cols        = "45"
                        placeholder = "Write something you want to share"
                        className   = { styles.content }
                    //   value       = { userData.email }
                    //   onChange    = { handleChange }
            />

            <div className = { styles.submitContainer }>
                <button type      = "submit"
                        className = { styles.btnNo }
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