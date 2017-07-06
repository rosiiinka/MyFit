import React, { Component } from 'react'
import Auth from '../../utilities/Auth'
import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'

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
        UserActions.logout(user)
    }

    render() {
        return null
    }
}

