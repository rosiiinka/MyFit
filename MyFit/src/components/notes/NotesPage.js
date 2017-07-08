import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Note from './Note'
import CreateNote from './CreateNote'

class NotesPage extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="create-note">
                <div className="list-all">
                    <div className="single-note">
                        <Note />
                    </div>
                    <div className="single-note">
                        <Note />
                    </div>
                    <div className="single-note">
                        <Note />
                    </div>
                </div>

                <CreateNote />
            </div>
        )

    }

}
export default NotesPage


