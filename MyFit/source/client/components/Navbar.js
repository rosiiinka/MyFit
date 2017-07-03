import React, { Component } from 'react';
import { Link }  from 'react-router';

import { NavbarUserMenu } from "./sub-components/NavbarUserMenu"

export class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ajaxAnimationClass: ''
        }
    }

    componentDidMount()  {
        $(document).ajaxStart(() => {
            this.setState({
                ajaxAnimationClass: 'fadeIn'
            });
        });

         $(document).ajaxComplete(() => {
            this.setState({
                ajaxAnimationClass: 'fadeOut'
            });
        });
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top" >
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <span ref="triangles" className={'triangles animated' + this.state.ajaxAnimationClass}>
                            <div className="tri invent" />
                            <div className="tri invent" />
                            <div className="tri" />
                            <div className="tri invent" />
                            <div className="tri invent" />
                            <div className="tri" />
                            <div className="tri invent" />
                            <div className="tri" />
                            <div className="tri invent" />
                        </span>
                        MDB
                    </Link>
                </div>
                <div id="navbar" className='navbar-collapse collapse'>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/movie/add">Add Movie</Link>
                        </li>
                    </ul>
                    
                    { <NavbarUserMenu userData={ this.props.userData } /> }
                </div>
            </nav>
        )
    }
}
