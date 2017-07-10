import React, { Component } from 'react'
import Auth from '../../utilities/Auth'
import UserStore from '../../stores/UserStore'

export default class LogoutPage extends Component {
    constructor(props) {
        super(props)

        this.logout()
    } 

    logout() {
        let username = window.localStorage.getItem('currentUser')
        let user = {
            username: username
        }
        
        UserStore.logout(user).then(user => {
            Auth.deAuthenticateUser()
            this.props.history.push('/')
        })
    }

    render() {
        return null
    }
}

