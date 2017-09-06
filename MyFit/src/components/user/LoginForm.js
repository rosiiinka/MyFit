import React, { Component } from 'react'
import UserStore from '../../stores/UserStore'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
import Auth from '../../utilities/Auth'
import toastr from 'toastr'


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

        if(!user.username || user.username < 3) {
            return
        }

        UserStore.login(user).then(data => {
            Auth.authenticate(data.user)
            this.props.history.push('/')
        })
      
        toastr.success("You've registered successfully")
    }

    render() {
        return (
            <form>
                <InputText name='username' placeholder='Username' handleChange={this.handleChange.bind(this)} value={this.state.user.username} />
                <InputPassword name='password' placeholder='Password' handleChange={this.handleChange.bind(this)} value={this.state.user.password} />
                <div>{this.state.error}</div>
                <input type='submit' onClick={this.loginUser.bind(this)} value='Login' className='btn btn-default' />
            </form>
        )
    }
}

export default LoginForm
