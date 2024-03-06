function Login ( props ){
    const { styles, userData, handleChange } = props;

    return(
        <div className = { styles.subContainer } >
            <h1> LOG IN </h1>

            <form>
                <input name = "email"
                       type = "text"
                       autoFocus
                       placeholder  = "E-mail..."
                       autoComplete = "off"
                       value        = { userData.email }
                       onChange     = { handleChange }
                />
                
                <input name = "plainPassword"
                       type = "password"
                       placeholder  = "Password..."
                       autoComplete = "off"
                       value        = { userData.plainPassword }
                       onChange     = { handleChange }
                />
                
                <button class="btn btn-success">
                    LOG IN
                </button>
            </form>
        </div>
    )
}

export default Login;