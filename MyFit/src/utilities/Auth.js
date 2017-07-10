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
        let username = window.localStorage.getItem('currentUser')
        let token = window.localStorage.getItem('token')
        return UserStore.getByUsername(username).then(data => {
            if (data.user) {
                let user = data.user
                if (user.token === token) {
                    return true
                } else {
                    return false
                }
            }
        })
    }

    static isInRole(role) {
        let username = window.localStorage.getItem('currentUser')

        return UserStore.getByUsername(username).then(data => {
            return data.user.roles.indexOf(role) !== -1
        })
    }
}

export default Auth
