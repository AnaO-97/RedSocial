import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/actionsPosts";
import styles  from "./home.module.css";
import AllPost from "./AllPosts";
import CreatePost from "./CreatePost";
import Searchbar  from "../Navbar/Searchbar";

function Home ( props ) {
    const { userData } = props;
    const dispatch     = useDispatch();

    const token    = useSelector(( state )=> state.JWT_KEY);
    const allPosts = useSelector(( state )=> state.allPosts);

    const chargeAllPosts = () => {
        dispatch( getAllPosts( token ) )
    }

    useEffect(()=>{
        chargeAllPosts();
    }, [ ])
   
    return(
        <div className = { styles.homeGeneral }>
            <div className = { styles.homeSubContainer }>
                <span>
                    My post
                    <img src = { process.env.REACT_APP_IMG_LOGO }/>
                </span>

                <Searchbar/>

                <AllPost   allPosts    = { allPosts }
                           userData    = { userData }
                />
            </div>

            <div className = { styles.postContainer}>
                <CreatePost token = { token } />
            </div>
        </div>
    )
}

export default Home;