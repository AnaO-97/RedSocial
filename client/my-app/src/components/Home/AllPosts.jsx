import styles from "./allPosts.module.css";

function AllPost () {
    return(
        <div className = { styles.allPostsContainer }>
            <div className = { styles.cardPost }>
                <div className = { styles.headCard }>
                    <div className = { styles.settings }>
                        <button className = "material-symbols-outlined">
                            delete
                        </button>
                        <button className = "material-symbols-outlined">
                            edit
                        </button>
                    </div>
                    <h3> Title post </h3>
                    <h6> CreateAt: </h6>
                </div>
                
                <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio unde aspernatur fugit minima? Soluta praesentium eos, quas magnam ipsum repudiandae, illo sint provident odio necessitatibus sunt minus ratione modi! Amet.</p>
                
                <div className = { styles.footerCard }>
                    <h6> Author </h6>
                    <button className = "material-symbols-outlined">
                        favorite
                    </button>
                </div>

            </div>
            
            <hr />

            <div className = { styles.cardPost }>
                <div className = { styles.headCard }>
                    <div className = { styles.settings }>
                        <button className = "material-symbols-outlined">
                            delete
                        </button>
                        <button className = "material-symbols-outlined">
                            edit
                        </button>
                    </div>
                    <h3> Title post </h3>
                    <h6> CreateAt: </h6>
                </div>
                
                <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio unde aspernatur fugit minima? Soluta praesentium eos, quas magnam ipsum repudiandae, illo sint provident odio necessitatibus sunt minus ratione modi! Amet.</p>
                
                <div className = { styles.footerCard }>
                    <h6> Author </h6>                    
                    <button className = "material-symbols-outlined">
                        favorite
                    </button>
                </div>

            </div>
            
            <hr />

            <div className = { styles.cardPost }>
                <div className = { styles.headCard }>
                    <div className = { styles.settings }>
                        <button className = "material-symbols-outlined">
                            delete
                        </button>
                        <button className = "material-symbols-outlined">
                            edit
                        </button>
                    </div>
                    <h3> Title post </h3>
                    <h6> CreateAt: </h6>
                </div>
                
                <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio unde aspernatur fugit minima? Soluta praesentium eos, quas magnam ipsum repudiandae, illo sint provident odio necessitatibus sunt minus ratione modi! Amet.</p>
                
                <div className = { styles.footerCard }>
                    <h6> Author </h6>
                    <button className = "material-symbols-outlined">
                        favorite
                    </button>
                </div>

            </div>
            
            <hr />

            <div className = { styles.cardPost }>
                <div className = { styles.headCard }>
                    <div className = { styles.settings }>
                        <button className = "material-symbols-outlined">
                            delete
                        </button>
                        <button className = "material-symbols-outlined">
                            edit
                        </button>
                    </div>
                    <h3> Title post </h3>
                    <h6> CreateAt: </h6>
                </div>
                
                <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio unde aspernatur fugit minima? Soluta praesentium eos, quas magnam ipsum repudiandae, illo sint provident odio necessitatibus sunt minus ratione modi! Amet.</p>
                
                <div className = { styles.footerCard }>
                    <h6> Author </h6>
                    <button className = "material-symbols-outlined">
                        favorite
                    </button>
                </div>

            </div>
            
            <hr />

            <div className = { styles.cardPost }>
                <div className = { styles.headCard }>
                    <div className = { styles.settings }>
                        <button className = "material-symbols-outlined">
                            delete
                        </button>
                        <button className = "material-symbols-outlined">
                            edit
                        </button>
                    </div>
                    <h3> Title post </h3>
                    <h6> CreateAt: </h6>
                </div>
                
                <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio unde aspernatur fugit minima? Soluta praesentium eos, quas magnam ipsum repudiandae, illo sint provident odio necessitatibus sunt minus ratione modi! Amet.</p>
                
                <div className = { styles.footerCard }>
                    <h6> Author </h6>
                    <button className = "material-symbols-outlined">
                        favorite
                    </button>
                </div>

            </div>
            
            <hr />                                    
        </div>
    );
}

export default AllPost;