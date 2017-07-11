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

        this.getAllNotes = this.getAllNotes.bind(this)

        NoteStore.on(
            NoteStore.eventTypes.ADD_NOTE,
            this.getAllNotes
        )
    }

    componentDidMount() {
        this.getAllNotes()
    }

    getAllNotes() {
        let id = window.localStorage.getItem('userId')
        NoteStore.getAllByUserId(id).then(data => {
            this.setState({
                notes: data.notes
            })
        })
    }

    render() {
        let notes = []
        if (this.state.notes.length !== 0) {
            notes = this.state.notes.map((note, id) => (
                <div key={note._id} className="single-note">
                    <Note
                        date={note.originalDate}
                        quantity={note.quantity}
                        products={note.products} />
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


