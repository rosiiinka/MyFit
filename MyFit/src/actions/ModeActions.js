import dispatcher from '../dispatcher'

const modeActions = {
    createMode: (mode) => {
        dispatcher.dispatch({
            type: 'CREATE_MODE', 
            mode
        })
    }
}

export default modeActions