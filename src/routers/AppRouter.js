import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <Header />
        <Route path="/" component={HomePage} />
    </Router>
)

export default AppRouter