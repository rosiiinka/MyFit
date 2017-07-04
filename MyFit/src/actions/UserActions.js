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
  },
  getById: (id) => {
    dispatcher.dispatch({
      type: 'GET_BY_ID',
      id
    })
  }
}

export default userActions
