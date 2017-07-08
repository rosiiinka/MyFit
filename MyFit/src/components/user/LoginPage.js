import React, { Component } from 'react'
import LoginForm from './LoginForm'

class LoginPage extends Component {
    render () {
        return (
            <div className='login-container'>
                <h1 className='centered'>Login</h1>
                <LoginForm {...this.props} />
            </div>
        )
    }
}

export default LoginPage