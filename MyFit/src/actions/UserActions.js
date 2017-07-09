import dispatcher from '../dispatcher'

const userActions = {
    register: (user) => {
        dispatcher.dispatch({
            type: 'REGISTER_USER', 
            user
        })
    },
    login: (user) => {
        dispatcher.dispatch({
            type: 'LOGIN_USER',
            user
        }) 
    },
    logout: (user) => {
        dispatcher.dispatch({
            type: 'LOGOUT_USER',
            user
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