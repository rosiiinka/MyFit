import dispatcher from '../utilities/Dispatcher'

let userActions = {
  register: (username, password, firstName, lastName) => {
    dispatcher.dispatch({
      type: 'REGISTER_USER',
      username,
      password,
      firstName,
      lastName
    })
  }
}

export default userActions
