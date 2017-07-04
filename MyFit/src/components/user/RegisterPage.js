import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

class RegisterPage extends Component {
    render () {
        return (
            <div className='container'>
                <h1 className='centered'>Register</h1>
                <RegisterForm />
            </div>
        )
    }
}

export default RegisterPage
