import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class UserStore extends EventEmitter {
    constructor(props) {
        super(props)
        this.users = [
            {id: 1, username: 'username', password: 'password', firstName: 'firstName', lastName: 'lastName', picture: 'picture'}
        ]
    }

    
    register(user) {
        console.log(user);

        this.emit('change')
    }

    getAllUsers() {
        return this.users
    }

    handleAction(action) {
        switch(action.type) {
            case 'REGISTER_USER': {
                this.register(action.title)
                break;
            }

            case 'DELETE_BOOK': {
                this.deleteBook(action.id)
                break;
            }

            default : {
                break;
            }
        }
    }
}

let userStore = new UserStore()
dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore