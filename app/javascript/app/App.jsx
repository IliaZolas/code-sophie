import React from 'react';
import Nav from './components/nav/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Link } from "react-router-dom";

const App = () => {
  
  return (
    <div>
          <Nav/>
          <Home />
    </div>
  );
};

export default App;