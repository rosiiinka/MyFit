import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Auth from './Auth'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
            Auth.areWeHaveUser() ? (    
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            )
        )
    } />
)

export default PrivateRoute