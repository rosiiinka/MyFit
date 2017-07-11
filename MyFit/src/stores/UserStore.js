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
        return UserData
        .login(user)
        .then(data => { return data })
    }

    logout (user) {
        return UserData
        .logout(user)
        .then(data => { return data })
    }

    getByUsername (username) {
        return UserData
        .getByUsername(username)
        .then(data => { return data })
    }

    handleAction (action) {
        switch (action.type) {
            case 'REGISTER_USER': {
                this.register(action.user)
                break
            }
            case 'GET_BY_USERNAME': {
                this.getByUsername(action.username)
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
    SET_USER: 'user_set',
    LOGOUT_USER: 'user_logout',
    GET_USER: 'user_get'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore