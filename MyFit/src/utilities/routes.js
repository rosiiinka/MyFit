import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegisterPage from '../components/user/RegisterPage'
import HomePage from '../components/home/HomePage'
import PageNotFound from '../components/error/PageNotFound'

export default () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/user/register' component={RegisterPage} />
        <Route component={PageNotFound} />
    </Switch>
)
