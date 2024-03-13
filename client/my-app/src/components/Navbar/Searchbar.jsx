import { useState } from "react";
import styles from "./bar.module.css";

function Searchbar ( props ) {    
    const [ filterBy, setFilterBy ] = useState({
        innerText   : "Author",
        filterQuery : "author",
        filterValue : ""
    });

    const handleFilterBy = ( event ) => {
        const filter = event.target.attributes.name.value;
        const { innerText } = event.target;
        
        setFilterBy({
            ...filterBy,
            innerText,
            filterQuery : filter,
        });
    }

    // useEffect(()=>{
    //     console.log("query", filterBy.filterQuery)
    // },[ filterBy.filterQuery ])

    return(
        <div className = { styles.generalSearchbar }>
            <div className = { styles.subContainerA }>
                <h5>Filter by</h5>
                <div className = "dropdown">
                    <a className = "dropdown-toggle" data-bs-toggle = "dropdown" aria-expanded = "false">
                        <button className = "material-symbols-outlined">
                            filter_list
                        </button>
                    </a>

                    <ul className = "dropdown-menu">
                        <li className   = "dropdown-item" 
                            name        = "author"
                            onClick     = {handleFilterBy}
                        >
                            Author
                        </li>
                        <li className   = "dropdown-item" 
                            name        = "title"
                            onClick     = {handleFilterBy}
                        >
                            Post title
                        </li>
                        <li className   = "dropdown-item" 
                            name        = "createdAt"
                            onClick     = {handleFilterBy}
                        >
                            Creation date
                        </li>
                        <li className   = "dropdown-item" 
                            name        = "myPosts"
                            onClick     = {handleFilterBy}
                        >
                            My posts
                        </li>
                    </ul>
                </div>

                <h5> { filterBy.innerText } </h5>          
            </div>
            
            <div className = { styles.subContainerB }>                
                <input name = "searchInput"
                       type = "text"
                       placeholder  = "Search..."
                       autoComplete = "off"
                       className    = { styles.searchInput }
                       // value        = { userData.email }
                       // onChange     = { handleChange }
                />
                <button className = "material-symbols-outlined">
                    search
                </button>
            </div>
        </div>
    )
}

export default Searchbar;