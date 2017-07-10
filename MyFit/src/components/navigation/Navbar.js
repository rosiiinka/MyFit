import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserStore from '../../stores/UserStore'
import Auth from '../../utilities/Auth'
import LoginForm from "../user/LoginForm";

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        Auth.areWeHaveUser().then(result => {
            this.setState({
                loggedIn: result
            })
        })
    }

    render () {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                       <Link className="navbar-brand" to='/'><img src="/images/logo.png" alt="logo" /></Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav">
                            <li><Link to='/about'>About us</Link></li>
                            <li><Link to='/contacts'>Contacts</Link></li>
                            {
                                this.state.loggedIn ? <li><Link to='/user/notes'>Notes</Link></li> : false  
                            }
                            <li><Link to='/modes'>Modes</Link></li>
                        </ul>

                        { Auth.areWeHaveUser() ?
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/user/profile">Profile</Link></li>
                                <li><Link to="/user/logout">LogOut</Link></li>
                            </ul>
                              :
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to='/user/login'>Login</Link></li>
                                <li><Link to='/user/register'>Sign up</Link></li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
