import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render () {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/user/register'>Register</Link>
                <Link to='/user/login'>Login</Link>
            </nav>
        )
    }
}

export default Navbar
