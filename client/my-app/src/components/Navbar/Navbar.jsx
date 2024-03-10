import styles from "./bar.module.css";

function Navbar () {
    return(
        <div className = { styles.generalNavbar }>           
            <div className = { styles.subNavbar }>
                <span className = "material-symbols-outlined">
                    home
                </span>            
            </div>
            
            <div className = { styles.subNavbar }>
                <span className = "material-symbols-outlined">
                    favorite
                </span>

                <span className = "material-symbols-outlined">
                    data_check
                </span>
            </div>

            <div className = { styles.subNavbar }>
                <span className = "material-symbols-outlined">
                    settings
                </span>

                <span className = "material-symbols-outlined">
                    output
                </span>
            </div>
        </div>
    )
}

export default Navbar;