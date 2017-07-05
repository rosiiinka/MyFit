import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import UserData from '../database/UserData'

class UserStore extends EventEmitter {
    constructor(props) {
        super(props)
    }
 
    register (user) {
        UserData
        .register(user)
        .then(data => this.emit(this.eventTypes.USER_REGISTERED, data))
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
            default: break
        }
    }
}

let userStore = new UserStore()

userStore.eventTypes = {
    USER_REGISTERED: 'user_registered'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore