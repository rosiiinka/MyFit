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
export default modeActions