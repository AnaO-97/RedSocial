// import { useEffect } from 'react';
import './App.css';
import { Navbar, Home, Register } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();

  return (
    <div >
      {
        pathname !== "/register"
        ? <Navbar/>
        : null
      }

      <Routes>
        <Route exact path = "/register"
               element    = { <Register/> } 
        > </Route>

        <Route exact path = "/home"
               element    = { <Home/> } 
        > </Route>
      </Routes>
    </div>
  );
}

export default App;