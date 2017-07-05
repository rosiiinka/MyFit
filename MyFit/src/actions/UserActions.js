import dispatcher from '../dispatcher'

const userActions = {
    register: (user) => {
        dispatcher.dispatch({
            type: 'REGISTER_USER',
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