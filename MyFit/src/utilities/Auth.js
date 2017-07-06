import UserActions from '../actions/UserActions'
import UserStore from '../stores/UserStore'

class Auth {
    static authenticate (token, username) {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('currentUser', username)
    }

    static isAuthenticated (username) {
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
}

export default Auth
