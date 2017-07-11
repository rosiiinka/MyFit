<<<<<<< HEAD
import dispatcher from '../dispatcher'

const modeActions = {
    createMode: (mode) => {
        dispatcher.dispatch({
            type: 'CREATE_MODE', 
            mode
        }) 
    },
    getAll: (mode) => {
        dispatcher.dispatch({
            type: 'GETALL_MODE', 
            mode
        }) 
    }
}

=======
import dispatcher from '../dispatcher'

const modeActions = {
    createMode: (mode) => {
        dispatcher.dispatch({
            type: 'CREATE_MODE', 
            mode
        })
    }
}

>>>>>>> 0af2efcd3229137a2088c2e3c89a58979c9c90ee
export default modeActions