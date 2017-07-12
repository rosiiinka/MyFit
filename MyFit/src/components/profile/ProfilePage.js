import React, {Component} from 'react'
import Note from '../notes/Note'
import NoteStore from '../../stores/NoteStore'

class ProfilePage extends Component{
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: window.localStorage.getItem('currentUser')
            },
            notes: []
        }
    }

    componentWillMount() {
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

        return(
            <div className="profile-page">
                <div className="about-user">
                    <div className="flex-child">
                        <ul>
                            <li><img src="https://cdn.dribbble.com/users/124355/screenshots/2199042/profile_1x.png" alt="profile"/></li>
                            <li><h1>Username: { this.state.user.username } </h1></li>
                        </ul>
                    </div>
                </div>

                <div className="my-notes">
                    { notes }
                </div>
            </div>
        )

    }

}
export default ProfilePage

