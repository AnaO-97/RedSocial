import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch }  from "react-redux";
import { getAllPosts, createMyPost } from "../../redux/actionsPosts";
import { modifyInformationUser } from "../../redux/actionsUser";
import styles  from "./home.module.css";
import AllPost from "./AllPosts";
import CreatePost from "./CreatePost";
import Settings from "./Settings";
import Searchbar  from "../Navbar/Searchbar";

function Home ( props ) {
    const { userData, pathname } = props;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token    = useSelector(( state )=> state.JWT_KEY);
    const allPosts = useSelector(( state )=> state.allPosts);
    
    const [ currentDate, ]          = useState(new Date());
    const [ settings, setSettings ] = useState({
        color    : undefined,
        fullName : undefined,
        age      : undefined,
        email    : undefined,
        password : undefined,
    })   

    const [ newPost, setNewPost ] = useState({
        title   : "",
        content : "",
    });

    const handleClickNo = ( event ) => {
        const { id } = event.target.parentElement;

        if( id === "createPost" ){            
            setNewPost({
                title   : "",
                content : "",
            });
        }
        
        if( id === "settings" ){
            setSettings({
                color    : undefined,
                fullName : undefined,
                age      : undefined,
                email    : undefined,
                password : undefined,
            });
            navigate("/home");
        }
    }

    const handleChangeSettings = ( event ) => {
        const { name, value } = event.target;

        setSettings({
            ...settings,
            [ name ] : value,
        })
    }

    const handleChangeCreatePost = ( event ) => {
        const { name, value } = event.target;

        setNewPost({
            ...newPost,
            [ name ] : value,
        })
    }

    const handleSubmitCreatePost =  ( event ) => {
        event.preventDefault();
        dispatch(createMyPost( newPost, token ));

        setNewPost({
            title   : "",
            content : ""
        })
    }

    const handleSubmitSettings = ( event ) => {
        event.preventDefault();

        let settingsClean = {};

        for (const attribute in settings) {
            if( settings[ attribute ] !== undefined )
                settingsClean[ attribute ] = settings[ attribute ]
        }

        setSettings({
            color    : undefined,
            fullName : undefined,
            age      : undefined,
            email    : undefined,
            password : undefined,
        })

        dispatch(modifyInformationUser(settingsClean, token))

        navigate("/home");
    }

    
    const chargeAllPosts = () => {
        dispatch( getAllPosts( token ) )
    }

    useEffect(()=>{
        chargeAllPosts();
    }, [ ])
   
    return(
        <div className = { styles.homeGeneral }>
            <div className = { styles.homeSubContainer }>
                <span style = {{ textShadow : `3px 2px 5px ${ userData.color }` }}>
                    My post
                    <img src = { process.env.REACT_APP_IMG_LOGO }/>
                </span>

                <Searchbar userData = { userData }/>

                <AllPost   allPosts    = { allPosts }
                           userData    = { userData }
                />
            </div>

            <div className = { styles.changingSection}
                 style     = {{ backgroundColor : `${ userData.color }80` }}
            >
                <div className = { styles.headerContainer }>
                    <span className = "material-symbols-outlined">
                        { pathname === "/home/settings" ? "settings" : "post_add" }
                    </span>
                    <span style = {{ textShadow : `3px 2px 5px ${ userData.color }` }}> 
                    { pathname === "/home/settings" ? "Settings" : "New Post" } 
                    </span>
                </div>
                {
                    pathname === "/home/settings"
                    ? <Settings userData = { userData }  
                                settings = { settings }
                                handleClickNo        = { handleClickNo }
                                handleChangeSettings = { handleChangeSettings }
                                handleSubmitSettings = { handleSubmitSettings }
    
                    />
                    : <CreatePost newPost     = { newPost }
                                  currentDate = { currentDate }
                                  handleClickNo          = { handleClickNo }
                                  handleChangeCreatePost = { handleChangeCreatePost }
                                  handleSubmitCreatePost = { handleSubmitCreatePost }
                    />
                }
                <h6 style = {{ backgroundColor : `${ userData.color }` }}> 
                    { userData.fullName } ---- { userData.age } years 
                </h6>
            </div>
        </div>
    )
}

export default Home;