import React, { Component } from 'react'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
import Auth from '../../utilities/Auth'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''
            },
            error: ''
        }

        this.handleUserLogin = this.handleUserLogin.bind(this)

        UserStore.on(
            UserStore.eventTypes.LOGIN_USER,
            this.handleUserLogin
        )
    }

    componentWillUnmount() {
        UserStore.removeListener(
            UserStore.eventTypes.LOGIN_USER,
            this.handleUserLogin
        )
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value
        
        let user = this.state.user

        user[field] = value
        this.setState({ 
            user: user
        })
    }

    loginUser(event) {
        event.preventDefault()
        let user = this.state.user
        UserActions.login(user)
    }

    handleUserLogin(data) {
        if (data.success) {
            Auth.authenticate(data.user.token, data.user.username)
            UserStore.emit(UserStore.eventTypes.SET_USER)
            this.props.history.push('/')
        } else {
            this.setState({
                error: data.message
            })
        }
    }

    render() {
        return (
            <form className='container'>
                <InputText name='username' placeholder='Username' handleChange={this.handleChange.bind(this)} value={this.state.user.username} />
                <InputPassword name='password' placeholder='Password' handleChange={this.handleChange.bind(this)} value={this.state.user.password} />
                <div>{this.state.error}</div>
                <input type='submit' onClick={this.loginUser.bind(this)} value='Login' className='btn btn-default' />
            </form>
        )
    }
}

export default LoginForm
