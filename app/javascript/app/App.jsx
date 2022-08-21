import React from 'react';
import Nav from './components/nav/Nav';
import Dashboard from './components/dashboard/Dashboard';
import Home from "./pages/Home";

import {Route, Routes} from 'react-router-dom'

const App = () => {
  
  return (
    <div>
          <Nav/>
          <Home />
    </div>
  );
};

export default App;