import React, { Component } from 'react'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
import Auth from '../../utilities/Auth'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                picture: ''
            },
            error: ''
        }

        this.handleUserRegistration = this.handleUserRegistration.bind(this)

        UserStore.on(
            UserStore.eventTypes.REGISTER_USER,
            this.handleUserRegistration
        )
    }

    componentWillUnmount() {
        UserStore.removeListener(
            UserStore.eventTypes.REGISTER_USER,
            this.handleUserRegistration
        )
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value
        
        let user = this.state.user

        user[field] = value
        this.setState({ user: user })
    }

    registerUser(event) {
        event.preventDefault()
        let user = this.state.user
        if(user.password === user.confirmPassword) {
            UserActions.register(user)
        } else {
            this.setState({
                error: 'Your password do not match'
            })
        }
        
    }

    handleUserRegistration(data) {
        if (data.success) {
            Auth.authenticate(data.createdUser.token, data.createdUser.username)
            UserStore.emit(UserStore.eventTypes.SET_USER)
            this.props.history.push('/')
        } else {
            this.setState({
                error: data.message.errmsg
            })
        }
    }

    render() {
        return (
            <div>
                { this.state.error !== '' ? <h1 id="error">{ this.state.error }</h1> : false }
                <form className='container'>
                    <InputText name='username' placeholder='Username' handleChange={this.handleChange.bind(this)} value={this.state.user.username} />
                    <InputPassword name='password' placeholder='Password' handleChange={this.handleChange.bind(this)} value={this.state.user.password} />
                    <InputPassword name='confirmPassword' placeholder='Confirm Password' handleChange={this.handleChange.bind(this)} value={this.state.user.confirmPassword} />
                    <InputText name='firstName' placeholder='First Name' handleChange={this.handleChange.bind(this)} value={this.state.user.firstName} />
                    <InputText name='lastName' placeholder='Last Name' handleChange={this.handleChange.bind(this)} value={this.state.user.lastName} />
                    <input type='submit' onClick={this.registerUser.bind(this)} value='Register' className='btn btn-default' />
                </form>
            </div>
            
        )
    }
}

export default RegisterForm
