import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch }  from "react-redux";
import { getAllPosts, createMyPost, updatePost, deletePost } from "../../redux/actionsPosts";
import { modifyInformationUser } from "../../redux/actionsUser";
import styles  from "./home.module.css";
import AllPost from "./AllPosts";
import CreateModifyPost from "./CreateModifyPost";
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
    });

    const [ newPost, setNewPost ] = useState({
        title   : "",
        content : "",
    });

    const [ postModify, setPostModify ] = useState({ 
        id      : "" ,
        title   : undefined,
        content : undefined,
        likes   : undefined,
    })

    const iconChangingSection = () => {
        if( pathname === "/home" )
            return "post_add"
        if( pathname === "/home/settings" )
            return "settings"
        if( pathname === "/home/modifyPost" )
            return "edit"
    }

    const titleChangingSection = () => {
        if( pathname === "/home" )
            return "New Post"
        if( pathname === "/home/settings" )
            return "Settings"
        if( pathname === "/home/modifyPost" )
            return "Edit Post"
    }

    const handleClickNo = ( event ) => {       
        const { id } = event.target.parentElement;

        if( id === "createModifyPost" ){ 
            if( pathname === "/home/modifyPost" )
                navigate("/home");

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

    const handleChangeCreateModifyPost = ( event ) => {
        const { name, value } = event.target;

        if( pathname === "/home" ){
            setNewPost({
                ...newPost,
                [ name ] : value,
            })     
        }
        
        if( pathname === "/home/modifyPost" ){
            setPostModify({
                ...postModify,
                [ name ] : value,
            }) 
        }
    }

    const handleSubmitCreateModifyPost =  ( event ) => {
        event.preventDefault();
        
        if( pathname === "/home" ){
            dispatch( createMyPost( newPost, token ) );

            setNewPost({
                title   : "",
                content : ""
            })
        }
        
        if( pathname === "/home/modifyPost" ){
            let modifyClean = {};

            for (const attribute in postModify) {
                if( postModify[ attribute ] !== undefined )
                    modifyClean[ attribute ] = postModify[ attribute ]
            }

            dispatch( updatePost( token, modifyClean ) );

            setPostModify({
                id      : "" ,
                title   : undefined,
                content : undefined,
                likes   : undefined,
            })

            navigate("/home");
        }
    }

    const handleSubmitSettings = ( event ) => {
        event.preventDefault();

        let settingsClean = {};

        for (const attribute in settings) {
            if( settings[ attribute ] !== undefined )
                settingsClean[ attribute ] = settings[ attribute ]
        }

        dispatch( modifyInformationUser( settingsClean, token ) )

        setSettings({
            color    : undefined,
            fullName : undefined,
            age      : undefined,
            email    : undefined,
            password : undefined,
        })

        navigate("/home");
    }

    const handleDeletePost = ( event ) => {
        const { id } = event.target;

        dispatch( deletePost( token, id ) );
        
        navigate("/home");
    }

    const handleModifyPost = ( event ) => {
        const { id } = event.target;
        const [ postModify ] = allPosts.filter((post)=>post.id===id);

        navigate("/home/modifyPost");

        setPostModify({ 
            id      : postModify.id,
            title   : postModify.title,
            content : postModify.content,
        })
    }

    useEffect(()=>{
        dispatch( getAllPosts( token ) )
    }, [ ])

    // useEffect(()=>{
    //     console.log(postModify)
    // }, [ postModify ])
   
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
                           handleModifyPost = { handleModifyPost }
                           handleDeletePost = { handleDeletePost }
                />
            </div>

            <div className = { styles.changingSection}
                 style     = {{ backgroundColor : `${ userData.color }80` }}
            >
                <div className = { styles.headerContainer }>
                    <span className = "material-symbols-outlined">
                        { iconChangingSection() }
                    </span>
                    <span style = {{ textShadow : `3px 2px 5px ${ userData.color }` }}> 
                        { titleChangingSection() } 
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
                    : <CreateModifyPost newPost     = { newPost }
                                        pathname    = { pathname }
                                        currentDate = { currentDate }
                                        postModify  = { postModify }
                                        handleClickNo          = { handleClickNo }
                                        handleChangeCreateModifyPost = { handleChangeCreateModifyPost }
                                        handleSubmitCreateModifyPost = { handleSubmitCreateModifyPost }
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