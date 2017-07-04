import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render () {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/user/register'>Register</Link>    
                    </li>
                    <li>
                        <Link to='/user/login'>Login</Link>    
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
