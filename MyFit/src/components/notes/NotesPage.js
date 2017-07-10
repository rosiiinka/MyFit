import React, {Component} from 'react'

import UserStore from '../../stores/UserStore'
import Note from './Note'
import CreateNote from './CreateNote'

class NotesPage extends Component{
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: 'Niki',
                notes: [
                    {id: 1, date: '10/07/2016', product: 'Pizza', calories: '240/100', when: 'Monday'},
                    {id: 2, date: '12/04/2017', product: 'Musle', calories: '200/100', when: 'Firday'},
                    {id: 2, date: '12/04/2017', product: 'Musle', calories: '200/100', when: 'Firday'}
                ]
            }
        }

        this.listAllNotes = this.listAllNotes.bind(this)

        UserStore.on(
            UserStore.eventTypes.CREATE_NOTE, 
            this.listAllNotes
        )
    }

    listAllNotes(data) {
        let notes = this.state.user.notes
        let user = this.state.user 

        user[notes]
        this.setState({
            user: data.notes
        })
    }

    render() {
        let notes = this.state.user.notes.map((note, id) => (
            <div className="single-note">
                <Note 
                key={ id }
                when={ note.when }
                date={ note.date }
                product={ note.product }
                calories={ note.calories } />
            </div>
        ))
        
        return(
            <div className="create-note">
                <div className="list-all">
                    { notes }
                </div>

                <CreateNote />
            </div>
        )

    }

}
export default NotesPage


