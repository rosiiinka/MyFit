import React, { Component } from 'react'
import Input from '../common/Input'
import UserActions from '../../actions/UserActions'

class RegisterForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            user: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                picture: ''
            }
        }
    }

    handleChange (event) {
        let target = event.target
        let field = target.name
        let value = target.value
        console.log(`${field} ${value}`)
        let user = this.state.user
        user[field] = value

        this.setState({
            user: user
        })
    }

    registerUser (event) {
        event.preventDefault()
        let user = this.state.user
        UserActions.register(user.username, user.password, user.firstName, user.lastName)
    }

    render () {
        return (
            <form>
                <input
                    type='text'
                    name='username'
                    value={this.state.user.username}
                    onChange={this.handleChange.bind(this)} />
                <input
                    type='text'
                    name='password'
                    value={this.state.user.username}
                    onChange={this.handleChange.bind(this)} />
                <input type='submit' onClick={this.registerUser.bind(this)} value='Register' />
            </form>
        )
    }
}

export default RegisterForm
