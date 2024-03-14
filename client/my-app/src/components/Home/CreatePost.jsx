import styles  from "./createPost.module.css";

function CreatePost ( props ) {
    const { newPost, currentDate, handleClickNo, handleChangeCreatePost, handleSubmitCreatePost } = props;

    return(
        <>
        <form onSubmit  = { handleSubmitCreatePost }
              className = { styles.formCreatePost }
        >
            <input name      = "createdAt"
                   type      = "text"
                   disabled
                   className = { styles.createdAt }
                   value     = { currentDate.toLocaleString().split(",")[0] }
            />
            
            <input name         = "title"
                   type         = "text"
                   placeholder  = "Post title ..."
                   autoComplete = "off"
                   className    = { styles.title }
                   value        = { newPost.title }
                   onChange     = { handleChangeCreatePost }
            />
            
            <textarea name        = "content" 
                      rows        = "10" 
                      cols        = "45"
                      placeholder = "Write something you want to share"
                      className   = { styles.content }
                      value       = { newPost.content }
                      onChange    = { handleChangeCreatePost }
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

        <button id        = "createPost"
                className = { styles.btnNo }
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