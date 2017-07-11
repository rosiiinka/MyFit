import React, { Component } from 'react'

import UserStore from '../../stores/UserStore'
import NoteStore from '../../stores/NoteStore'
import Note from './Note'
import CreateNote from './CreateNote'

class NotesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }

        this.listAllNotes = this.listAllNotes.bind(this)
        this.listAllNotes()

        NoteStore.on(
            NoteStore.eventTypes.ADD_NOTE,
            this.listAllNotes
        )
    }

    listAllNotes() {
        NoteStore.getAll().then(data => {
            this.setState({
                notes: data.notes
            })
        })
    }

    render() {
        let notes = []
        if (this.state.notes.length !== 0) {
            notes = this.state.notes.map((note, id) => (
                <div className="single-note">
                    <Note
                        key={id}
                        date={note.originalDate}
                        quantity={note.quantity}
                        products={note.products}
                        calories={'note.calories'} />
                </div>
            ))
        }

        return (
            <div className="create-note">
                <div className="list-all">
                    {notes}
                </div>

                <CreateNote />
            </div>
        )

    }

}
export default NotesPage


