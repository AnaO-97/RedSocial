import styles from "./bar.module.css";

function Navbar ( props ) {
    const { userData } = props;

    return(
        <div className = { styles.generalNavbar }
             style     = {{ backgroundColor : `${ userData.color }80` }}
        >
            <div className = { styles.subNavbar }>
                <span className = "material-symbols-outlined" title = "Home">
                    home
                </span>            
            </div>
            
            <div className = { styles.subNavbar }>
                <span className = "material-symbols-outlined" title = "Favorites">
                    favorite
                </span>

                <span className = "material-symbols-outlined" title = "My Posts">
                    data_check
                </span>
            </div>

            <div className = { styles.subNavbar }>
                <span className = "material-symbols-outlined" title = "Settings">
                    settings
                </span>

                <span className = "material-symbols-outlined" title = "Output">
                    output
                </span>
            </div>
        </div>
    )
}

export default Navbar;