import dispatcher from '../dispatcher'

const userActions = {
    register: (user) => {
        dispatcher.dispatch({
            type: 'REGISTER_USER', 
            user
        })
    },
    logout: (user) => {
        dispatcher.dispatch({
            type: 'LOGOUT_USER',
            user
        })
    },
    getByUsername: (username) => {
        dispatcher.dispatch({
            type: 'GET_BY_USERNAME',
            username
        })
    },
    createNote: (note) => {
        dispatcher.dispatch({
            type: 'CREATE_NOTE',
            note
        })
    },
    createMode: (mode) => {
        dispatcher.dispatch({
            type: 'CREATE_MODE',
            mode
        })
    }
}

export default userActions