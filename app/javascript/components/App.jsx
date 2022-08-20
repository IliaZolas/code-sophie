import React from 'react';
import Nav from './Nav';
import Dashboard from './Dashboard';
import {Route, Switch} from 'react-router-dom'

const App = () => {
  
  return (
    <div>
    <Nav/>
    <Dashboard />
    </div>
  );
};

export default App;