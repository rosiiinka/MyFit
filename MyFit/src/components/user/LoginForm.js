import React, { Component } from 'react'
import UserStore from '../../stores/UserStore'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
import Auth from '../../utilities/Auth'
import toastr from 'toastr'
import UserActions from '../../actions/UserActions'


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

        this.validateForm = this.validateForm.bind(this)
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

    validateForm() {
        let user = this.state.user
        let valid = true

        if (!user.username || user.username.length <= 3) {
            valid = false
            this.setState({
                error: 'username caanot be empty or less than 3 symbols'
            })
        }

        if (!user.password) {
            valid = false
            this.setState({
                error: 'password cannot be empty'
            })
        }

        return valid
    }

    loginUser(event) {
        event.preventDefault()
        let user = this.state.user

        if (this.validateForm()) {
            UserStore.login(user).then(data => {
                Auth.authenticate(data.user)
                toastr.success("You've login successfully")
                this.props.history.push('/')
            })
        } else {
            toastr.error(this.state.error)
        }
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
