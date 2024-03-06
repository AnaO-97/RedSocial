function Register ( props ){
    const { styles, userData, handleChange } = props;

    return(
        <div className = { styles.subContainer }>
            <h1> REGISTER </h1>

            <form>
                <input name = "fullName"
                       type = "text"
                       placeholder  = "Full name..."
                       autoComplete = "off"
                       value        = { userData.fullName }
                       onChange     = { handleChange }
                />

                <input name = "age"
                       type = "text"
                       placeholder  = "Age..."
                       autoComplete = "off"
                       value        = { userData.age }
                       onChange     = { handleChange }
                />

                <input name = "email"
                       type = "text"
                       autoFocus
                       placeholder  = "E-mail..."
                       autoComplete = "off"
                       value        = { userData.email }
                       onChange     = { handleChange }
                />
                
                <input name = "plainPassword"
                       type = "text"
                       placeholder  = "Password..."
                       autoComplete = "off"
                       value        = { userData.plainPassword }
                       onChange     = { handleChange }
                />

                <button class="btn btn-success">
                    REGISTER
                </button>
            </form>
        </div>
    )
}

export default Register;