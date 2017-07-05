import dispatcher from '../dispatcher'

const userActions = {
    register: (user) => {
        dispatcher.dispatch({
            type: 'REGISTER_USER',
            user
        })
    }  
}

export default userActions