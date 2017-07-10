import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import UserData from '../database/UserData'
import Auth from '../utilities/Auth'

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

    createNote(note) {
        UserData
        .createNote(note)
        .then(note => this.emit(this.eventTypes.CREATE_NOTE, note))
    }
    createMode(mode) {
        UserData
            .createMode(mode)
            .then(mode => this.emit(this.eventTypes.CREATE_MODE, mode))
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
            case 'CREATE_NOTE': {
                this.createNote(action.note)
                break
            }
            case 'CREATE_MODE': {
                this.createMode(action.mode)
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
    GET_USER: 'user_get',
    CREATE_NOTE: 'note_create',
    CREATE_MODE: 'mode_create'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore