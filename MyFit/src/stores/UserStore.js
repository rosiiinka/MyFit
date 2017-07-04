import { EventEmitter } from 'events'
import dispatcher from '../utilities/Dispatcher'

class UserStore extends EventEmitter {
  constructor (props) {
    super(props)

    this.users = []
  }
  
  register (username, password, firstName, lastName) {
    let id = this.books.length + 1
    this.users.push({
      id,
      username,
      password,
      firstName,
      lastName
    })

    this.emit('change')
  }

  handleActions (action) {
    switch (action.type) {
      case 'REGISTER_USER': {
        this.register(action.username, action.password, action.firstName, action.lastName)
        break
      }
      default: break
    }
  }
}

let userStore = new UserStore()

dispatcher.register(userStore.handleActions.bind(userStore))

export default userStore
