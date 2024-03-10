import styles from "./Landing.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../redux/actionsUser";
import { Login, Register } from "../index";

function Landing () {
    const dispatch = useDispatch();
    
    const [typeSession, setTypeSession] = useState("login");
    
    const [userData, setUserData] = useState({
        fullName : "",
        age      : 0,
        email    : "",
        plainPassword: "",
    });

    
    const handleSubmitRegister = (event) => {
        event.preventDefault(); 

        dispatch(registerUser(userData));
        // setUserData({
        //     fullName : "",
        //     age      : 0,
        //     email    : "",
        //     plainPassword: "",            
        // })
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault(); 

        dispatch(loginUser(userData));
        // setUserData({
        //     fullName : "",
        //     age      : 0,
        //     email    : "",
        //     plainPassword: "",            
        // })
    }

    const handleChange  = ( event ) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [ name ] : value,
        })
    }

    const handleSession = ( event ) => {
        setTypeSession(event.target.name)
    }

    return(
        <div className = { styles.generalContainer } >
            <img src = { process.env.REACT_APP_IMG_LOGO }/>
            {
                typeSession === "login"
                ? <Login    styles        = { styles } 
                            handleChange  = { handleChange } 
                            userData      = { userData } 
                            handleSubmit  = { handleSubmitLogin } 
                />
                : <Register styles        = { styles } 
                            handleChange  = { handleChange } 
                            userData      = { userData } 
                            handleSubmit  = { handleSubmitRegister } 
                />
            }

            {
                typeSession === "login"
                ?   <button className = { styles.otherOption } 
                            name      = "register" 
                            onClick   = { handleSession }>
                        REGISTER
                    </button> 
                :   <button className = { styles.otherOption } 
                            name      = "login"    
                            onClick   = { handleSession }>
                        LOG IN
                    </button>
            }
        </div>
    )
}

export default Landing;