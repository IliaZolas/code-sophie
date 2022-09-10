
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "../app/components/dashboard/Dashboard";


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

      <Dashboard />
    ,
    document.body.appendChild(document.createElement('div')),
  )
})