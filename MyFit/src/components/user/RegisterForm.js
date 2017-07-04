import React, { Component } from 'react'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
import UserActions from '../../actions/UserActions'

class RegisterForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            user: {
                username: '',
                password: '',
                confirmPassword: '',
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
        let user = this.state.user
        user[field] = value

        this.setState({
            user: user
        })
    }

    registerUser (event) {
        event.preventDefault()
        let user = this.state.user
        console.log(UserActions)
        UserActions.register(user.username, user.password, user.firstName, user.lastName)
        // this.props.history.push('/')
    }

    render () {
        return (
            <form className='container'>
                <InputText name='username' placeholder='Username' handleChange={this.handleChange.bind(this)} value={this.state.user.username}/>
                <InputPassword name='password' placeholder='Password' handleChange={this.handleChange.bind(this)} value={this.state.user.password}/>
                <InputPassword name='confirmPassword' placeholder='Confirm Password' handleChange={this.handleChange.bind(this)} value={this.state.user.confirmPassword}/>
                <InputText name='firstName' placeholder='First Name' handleChange={this.handleChange.bind(this)} value={this.state.user.firstName}/>
                <InputText name='lastName' placeholder='Last Name' handleChange={this.handleChange.bind(this)} value={this.state.user.lastName}/>
                <input type='submit' onClick={this.registerUser.bind(this)} value='Register' className='btn btn-default' />
            </form>
        )
    }
}

export default RegisterForm