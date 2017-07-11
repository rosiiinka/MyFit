import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utilities/Auth'
import Note from '../notes/Note'

class HomePage extends Component {
    render () {
        return (
            <div className="homepage">
                <div className="modes-container-home">
                    <div className="mode heading">
                        <h1>Most Recent Modes</h1>
                    </div>
 
                    <div className="mode">
                        <div className="flex-container">
                            <div className="flex-child">
                                <h2>Mode #1</h2>
                                <small><i>12/03/2017</i></small>
                            </div>

                            <div className="flex-child image"></div>
                        </div>
                    
                        <p>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted 
                            by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal 
                            distribution of letters, as opposed to using 'Content here, 
                            content here', 
                        </p>

                        <div className="button">
                            <Link to="/modes">Read More >></Link>
                        </div>
                    </div>

                    <div className="mode">
                        <div className="flex-container">
                            <div className="flex-child">
                                <h2>Mode #2</h2>
                                <small><i>12/03/2017</i></small>
                            </div>

                            <div className="flex-child image"></div>
                        </div>
                    
                        <p>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted 
                            by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal 
                            distribution of letters, as opposed to using 'Content here, 
                            content here', 
                        </p>

                        <div className="button">
                            <Link to="/modes">Read More >></Link>
                        </div>
                    </div>
                </div>
                
                { 
                    Auth.areWeHaveUser() ? 
                
                    <div className="last-note">
                        <Note>
                            <div className="button">
                                <Link className="btn btn-blue" to="/user/notes">View All</Link>
                            </div>
                        </Note>
                    </div>
                
                : false
                
                }
                
            </div>
        )
    }
}

export default HomePage
