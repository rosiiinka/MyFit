import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

class RegisterPage extends Component {
    constructor (props) {
        super(props)
        
    }
    render () {
        return (
            <div className='container'>
                <h1 className='centered'>Register</h1>
                <RegisterForm {...this.props} />
            </div>
        )
    }
}

export default RegisterPage
