import UserActions from '../actions/UserActions'
import UserStore from '../stores/UserStore'
import UserData from '../database/UserData'

class Auth {

    static authenticate(user) {
        window.localStorage.setItem('token', user.token)
        window.localStorage.setItem('currentUser', user.username)
        window.localStorage.setItem('roles', user.roles)
        window.localStorage.setItem('userId', user.id)
    }

    static deAuthenticateUser() {
        return window.localStorage.clear()
    }

    static areWeHaveUser() {
        let token = window.localStorage.getItem('token')

        if (token !== '' && token !== null && token !== undefined) {
            return true
        } else {
            return false
        }
    }

    static isInRole(role) {
        let roles = window.localStorage.getItem('roles')
        if (roles) {
            roles = roles.split(',')
            if (roles.indexOf(role) !== -1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }

    }
}

export default Auth
