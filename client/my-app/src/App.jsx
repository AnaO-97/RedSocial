import './App.css';
import { useSelector } from "react-redux";
import { Navbar, Home, Landing } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();
  const userData   = useSelector(( state )=> state.userData);

  return (
    <div className = "App">
      {
        pathname !== "/landing"
        ? <Navbar/>
        : null
      }

      <Routes>
        <Route exact path = "/landing"
               element    = { <Landing/> } 
        > </Route>

        <Route exact path = "/home"
               element    = { <Home  userData = { userData }/> } 
        > </Route>
      </Routes>
    </div>
  );
}

export default App;