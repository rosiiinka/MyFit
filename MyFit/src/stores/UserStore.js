import { EventEmitter } from 'events'
import dispatcher from '../utilities/Dispatcher'
import Users from '../database/users'

class UserStore extends EventEmitter {

    register (username, password, firstName, lastName) {
        console.log(username)
        //Users.register(username, password, firstName, lastName).then(user => console.log(`registered user ${user}`))
        this.emit('change')
    }

    getById (id) {
        /*Users.getById(id).then(user => {
            return user
        }).catch(err => console.log(err))*/
    }

    handleActions (action) {
        switch (action.type) {
            case 'REGISTER_USER': {
                this.register(action.username, action.password, action.firstName, action.lastName)
                break
            }
            case 'GET_BY_ID': {
                this.getById(action.id)
                break
            }
            default: 
                console.log('cant find that action')
                break
        }
    }
}

let userStore = new UserStore()

dispatcher.register(userStore.handleActions.bind(userStore))

export default userStore
