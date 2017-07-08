import React, {Component} from 'react'

import Note from './Note'
import CreateNote from './CreateNote'

class NotesPage extends Component{
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


