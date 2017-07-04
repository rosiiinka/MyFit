import React, { Component } from 'react'
import UserStore from '../../stores/UserStore'
import UserAction from '../../actions/UserActions'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            username: '',
            password: '',
            firsName: '',
            lastName: ''
        }
        UserStore.on('change', () => {
            this.getAll()
        })
    }

    componentDidMount() {
        this.getAll()
    }

    getAll() {
        this.setState({
            users: UserStore.getAllUsers()
        })
    }

    register (event) {
        event.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password,
            firsName: this.state.firsName,
            lastName: this.state.lastName
        }

        UserAction.register(user)
        
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value

        this.setState({
            username: value
        })

        console.log(this.state.username)
    }

    render () {
        let users = this.state.users.map( (user, index) => (
            <tr key={ index }>
                <td>{ user.username }</td>
                <td>{ user.password }</td>
                <td>{ user.firstName }</td>
                <td>{ user.lastName }</td>
                <td>{ user.picture }</td>
            </tr>
        )) 

        return (
            <div>
                <table className="table">
                    <thead>
                        <th> username </th>
                        <th> password </th>
                        <th> firsName </th>
                        <th> lastName </th>
                        <th> picture </th>
                    </thead>
                    <tbody>
                        { users }
                    </tbody>
                </table>

                <form action="">
                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">Username</label>
                        <input className="form-control" name="username" value={ this.state.username } onChange={ this.handleChange.bind(this) }/>
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">Password</label>
                        <input className="form-control" type="password" name="password" value={ this.state.password } onChange={ this.handleChange.bind(this) }/>
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">Conf Password</label>
                        <input className="form-control" type="password" name="password" value={ this.state.password } onChange={ this.handleChange.bind(this) }/>
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">FirstName</label>
                        <input className="form-control" type="text" name="firstName" value={ this.state.firstName } onChange={ this.handleChange.bind(this) }/>
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">LastName</label>
                        <input className="form-control" type="text" name="lastName" value={ this.state.lastName } onChange={ this.handleChange.bind(this) }/>
                    </fieldset>

                    <fieldset className="form-group">
                        <button className="btn btn-default" onClick={ this.register.bind(this) }>
                            submit
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default RegisterForm
