import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Mode extends Component {
    render() {
        return(
            <article>
                <h2>{ this.props.heading }</h2>
                <p>{ this.props.content }</p>
                <Link to={ '/mode/' + this.props.id} className="btn btn-blue">Read more</Link>
            </article>
        )
    }
}

export default Mode