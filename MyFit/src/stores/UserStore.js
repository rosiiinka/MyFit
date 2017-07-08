import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import UserData from '../database/UserData'

class UserStore extends EventEmitter {
 
    register (user) {
        UserData
        .register(user)
        .then(data => this.emit(this.eventTypes.REGISTER_USER, data))
    }

    login (user) {
        UserData
        .login(user)
        .then(data => this.emit(this.eventTypes.LOGIN_USER, data))
    }

    logout (user) {
        UserData
        .logout(user)
        .then(data => this.emit(this.eventTypes.LOGOUT_USER, data))
    }

    getByUsername (id) {
        UserData.getById(id).then(user => {
            return user
        })
    }

    handleAction (action) {
        switch (action.type) {
            case 'REGISTER_USER': {
                this.register(action.user)
                break
            }
            case 'GET_BY_USERNAME': {
                this.getByUsername(action.id)
                break
            }
            case 'LOGIN_USER': {
                this.login(action.user)
                break
            }
            case 'LOGOUT_USER': {
                this.logout(action.user)
                break
            }
            default: break
        }
    }
}

let userStore = new UserStore()

userStore.eventTypes = {
    REGISTER_USER: 'user_registered',
    LOGIN_USER: 'user_loggedIn',
    SET_USER: 'user_set',
    LOGOUT_USER: 'user_logout'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore