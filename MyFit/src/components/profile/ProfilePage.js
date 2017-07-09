import React, {Component} from 'react'
import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'
import Note from '../notes/Note'

class ProfilePage extends Component{
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: 'Niki',
                email: 'nvr@myfit.com',
                age: '19',
                notes: [
                    {id: 1, date: '10/07/2016', product: 'Pizza', calories: '240/100', when: 'Monday'},
                    {id: 2, date: '12/04/2017', product: 'Musle', calories: '200/100', when: 'Firday'},
                    {id: 2, date: '12/04/2017', product: 'Musle', calories: '200/100', when: 'Firday'},
                    {id: 1, date: '10/07/2016', product: 'Pizza', calories: '240/100', when: 'Monday'}
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
                        <h1> { this.state.user.username } </h1>
                        <p>Age: { this.state.user.age }</p>
                    </div>
                    <div className="flex-child">
                        <ul>
                            <li>{ this.state.user.email }</li>
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

