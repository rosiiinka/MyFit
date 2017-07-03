import React, { Component } from 'react'

export class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            roles: [],
            information: '',
            votes: '',
            reviews: '',
            message: ''
        }
    }

    componentDidMount() {
        let request = {
            url: '/api/user/${this.props.params.userId}',
            method: 'get'
        }

        $.ajax(request)
            .done( user => {
                thiis.setState({
                    username: user.username,
                    roles: user.roles,
                    information: user.information,
                    votes: user.votes,
                    reviews: user.reviews
                })
            })
            .fail( err => {
                this.setState({
                    message: err.responseJSON.message
                })
            })
    }   

    render() {
        let nodes = {}
        nodes.roles = this.state.roles.map( (role, index ) => (
                <h4 key={ index } className="lead">
                    <strong>{ role }</strong>
                </h4>))
        return(
            <div>
                <div className="container profile-container">
                    <div className="profile-img">

                    </div>
                    <div className="profile-info clearfix">
                        <h2><strong>{ this.state.name }</strong></h2>
                        <h4 className="lead">Roles: </h4>
                        { nodes.roles }
                        <p>{ this.state.information }</p>
                    </div>
                </div>
                <div className="container profile-container">
                    <div className="profile-stats clearfix">
                        <ul>
                            <li>
                                <span className="stats-number">{ this.state.votes }</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pull-right btn-group">
                        <a href="#" className="btn btn-primary">
                            { this.state.showRatedMovies? 'Hide' : 'Rated movies' }
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}