<<<<<<< HEAD
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import ModeData from '../database/ModeData'

class ModeStore extends EventEmitter { 
    createMode (mode) {
        ModeData
        .createMode(mode) 
        .then(data => this.emit(this.eventTypes.CREATE_MODE, data))
        console.log(mode) 
    }

    getAll() {
        return ModeData
        .getAll()
        .then(data => { return data })
    }

    handleAction (action) {
        switch (action.type) {
            case 'CREATE_MODE': {
                this.createMode(action.mode)
                break
            }
            default: break
        }
    }
}

let modeStore = new ModeStore()

modeStore.eventTypes = {
    CREATE_MODE: 'CREATE_MODE',
    GETALL_MODE: 'GETALL_MODE'
}

dispatcher.register(modeStore.handleAction.bind(modeStore))
=======
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import ModeData from '../database/ModeData'

class ModeStore extends EventEmitter { 
    createMode (mode) {
        ModeData
        .createMode(mode) 
        .then(data => this.emit(this.eventTypes.CREATE_MODE, data))
        console.log(mode)
    }

    handleAction (action) {
        switch (action.type) {
            case 'CREATE_MODE': {
                this.createMode(action.mode)
                break
            }
            default: break
        }
    }
}

let modeStore = new ModeStore()

modeStore.eventTypes = {
    CREATE_MODE: 'CREATE_MODE'
}

dispatcher.register(modeStore.handleAction.bind(modeStore))
>>>>>>> 0af2efcd3229137a2088c2e3c89a58979c9c90ee
export default modeStore