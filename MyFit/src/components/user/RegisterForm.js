import React, { Component } from 'react'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
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
        UserAction.register(' dadassdas')
        this.setState({
            users: []
        })
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value

        this.setState({
            field: value
        })

        console.log(value)
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
                        <input className="form-control" type="password" value={ this.state.password } onChange={ this.handleChange.bind(this) }/>
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">Conf Password</label>
                        <input className="form-control" type="password" value={ this.state.password } />
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">FirstName</label>
                        <input className="form-control" value={ this.state.firsName } />
                    </fieldset>

                    <fieldset className="form-group">
                        <label className="control-label" htmlFor="disabledInput">LastName</label>
                        <input className="form-control" value={ this.state.lastName } />
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
