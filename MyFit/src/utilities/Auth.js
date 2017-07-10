import UserActions from '../actions/UserActions'
import UserStore from '../stores/UserStore'
import UserData from '../database/UserData'

class Auth {

    static authenticate(token, username) {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('currentUser', username)
        window.localStorage.setItem('lg', true)
    }

    static isAuthenticated(username) {
        let user = UserActions.getByUsername(username)
        let token = window.localStorage.getItem('token')
        if (user.token === token) {
            return true
        } else {
            return false
        }
    }

    static deAuthenticateUser() {
        return window.localStorage.clear()
    }

    static areWeHaveUser() {
        let user = window.localStorage.getItem('currentUser')

        if (user !== '' && user !== null && user !== undefined) {
            return true
        } else {
            return false
        }
    }

    static isInRole(role) {
        let username = window.localStorage.getItem('currentUser')

        UserData.getByUsername(username).then(data => {
            debugger
            if (data.success) {
                return data.user
            } else {
                return data.message
            }
        })
    }
}

export default Auth
