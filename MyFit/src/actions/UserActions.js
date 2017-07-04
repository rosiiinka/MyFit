import dispatcher from '../dispatcher'

const userActions = {
    register: (title) => {
        dispatcher.dispatch({
            type: 'REGISTER_USER',
            title
        })
    } 
}

export default userActions