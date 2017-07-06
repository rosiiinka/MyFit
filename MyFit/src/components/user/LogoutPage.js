import React, { Component } from 'react'
import Auth from '../../utilities/Auth'

export default class LogoutPage extends Component {
    constructor(props) {
        super(props)
        
        this.logOut();
    }

    logOut() {
        Auth.deAuthenticateUser()
        this.props.history.push('/user/login')
        return null
    }

    render() {
        return null
    }
}

