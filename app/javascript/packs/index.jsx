
import React from 'react'
import ReactDOM from 'react-dom'
// import App from '../app/App'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../app/pages/Home";
import About from "../app/pages/About";
import Contact from "../app/pages/Contact";
import Login from "../app/pages/Login";
import Nav from "../app/components/nav/Nav";
import Dashboard from "../app/components/dashboard/Dashboard";


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})