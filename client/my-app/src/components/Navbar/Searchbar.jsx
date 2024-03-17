import { filterPosts } from '../../redux/actionsPosts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./bar.module.css";

function Searchbar ( props ) {  
    const { userData } = props;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [ filterBy, setFilterBy ] = useState({
        innerText   : "All posts",
        filterQuery : "allPosts",
        filterValue : ""
    });

    const handleSubmitSearch = () => {
        dispatch( filterPosts( filterBy ) );
        // console.log(filterBy)
        // navigate("/home/filterPosts");
    }

    const handleFilterBy = ( event ) => {
        const filter = event.target.attributes.name.value;
        const { innerText } = event.target;
        
        setFilterBy({
            ...filterBy,
            innerText,
            filterQuery : filter,
        });
    }

    return(
        <div className = { styles.generalSearchbar }
             style     = {{ backgroundColor : `${ userData.color }80` }}
        >
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
                            name        = "allPosts"
                            onClick     = {handleFilterBy}
                        >
                            All posts
                        </li>
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
                        <li className = "dropdown-item" 
                            name      = "myPosts"
                            onClick   = {handleFilterBy}
                            style     = {{ fontWeight : "bold" }}
                        >
                            My posts
                        </li>
                        <li className = "dropdown-item" 
                            name      = "myFavorites"
                            onClick   = {handleFilterBy}
                            style     = {{ fontWeight : "bold" }}
                        >                            
                            My favorites
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
                <button className = "material-symbols-outlined"
                        onClick   = { handleSubmitSearch }
                >
                    search
                </button>
            </div>
        </div>
    )
}

export default Searchbar;