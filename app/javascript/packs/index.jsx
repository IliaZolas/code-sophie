
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app/App'
import {BrowserRouter as Router, Route } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})