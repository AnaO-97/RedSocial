import styles  from "./home.module.css";
import AllPost from "./AllPosts";
import CreatePost from "./CreatePost";
import Searchbar  from "../Navbar/Searchbar";

function Home () {
    return(
        <div className = { styles.homeGeneral }>
            <div className = { styles.homeSubContainer }>
                <span>
                    My post
                    <img src = { process.env.REACT_APP_IMG_LOGO }/>
                </span>

                <Searchbar/>
                
                <AllPost/>
            </div>

            <div className = { styles.postContainer}>
                <CreatePost/>
            </div>
        </div>
    )
}

export default Home;