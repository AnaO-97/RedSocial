import './App.css';
import { Navbar, Home, Landing } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();

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
               element    = { <Home/> } 
        > </Route>
      </Routes>
    </div>
  );
}

export default App;