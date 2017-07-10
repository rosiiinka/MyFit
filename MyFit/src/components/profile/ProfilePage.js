import React, {Component} from 'react'
import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'
import Note from '../notes/Note'

class ProfilePage extends Component{
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: window.localStorage.getItem('currentUser'),
                email: '',
                age: '',
                notes: [
                    
                ]
            }
        }
    }

    render() {
        let notes = this.state.user.notes.map(note => (
            <Note 
            when={ note.when } 
            date={ note.date }
            product={ note.product }
            calories={ note.calories } />
        ))

        return(
            <div className="profile-page">
                <div className="about-user">
                    <div className="flex-child">
                        <ul>
                            <li><img src="https://cdn.dribbble.com/users/124355/screenshots/2199042/profile_1x.png" alt="profile"/></li>
                            <li><h1>Username: { this.state.user.username } </h1></li>
                            <li><p>Age: { this.state.user.age }</p></li>
                            <li>E-mail: { this.state.user.email }</li>
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

