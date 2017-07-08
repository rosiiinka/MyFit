import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Auth from './Auth'

const PrivateRouteForLogin = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
            Auth.areWeHaveUser() ? (    
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            ) : (
                <Component {...props} />
            )
        )
    } />
)

export default PrivateRouteForLogin