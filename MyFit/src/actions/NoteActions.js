import dispatcher from '../dispatcher'

const noteActions = {
    add: (note) => {
        dispatcher.dispatch({
            type: 'ADD_NOTE',
            note
        })
    }
}

export default noteActions