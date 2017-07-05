import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import UserData from '../database/UserData'

class UserStore extends EventEmitter {
    constructor(props) {
        super(props)
    }
 
    register (user) {
        console.log(user)
        UserData.register(user)
        this.emit('change')
    }

    handleAction (action) {
        switch (action.type) {
            case 'REGISTER_USER': {
                console.log('asd')
                this.register(action.user)
                break
            }
            default: break
        }
    }
}

let userStore = new UserStore()
dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore