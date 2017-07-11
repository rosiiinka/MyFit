import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import NoteData from '../database/NoteData'

class NoteStore extends EventEmitter {
    add (note) {
        NoteData
        .add(note) 
        .then(data => this.emit(this.eventTypes.ADD_NOTE, data))
    }

    getAll() {
        return NoteData
        .getAll()
        .then(data => {return data})
    }

    handleAction (action) {
        switch (action.type) {
            case 'ADD_NOTE': {
                this.add(action.note)
                break
            }
            default: break
        }
    }
}

let noteStore = new NoteStore()

noteStore.eventTypes = {
    ADD_NOTE: 'note_add'
}

dispatcher.register(noteStore.handleAction.bind(noteStore))
export default noteStore