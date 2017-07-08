import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Mode extends Component {
    render() {
        return(
            <article>
                <h2>{ this.props.heading }</h2>
                <p>Our 1,350-calorie-a-day diet features foods that are great at stopping that famished feeling.
                        Plus, you’ll get 25 grams of slimming fiber a day. Just pick one breakfast, lunch, dinner, and
                        snack each day. Stick to our diet and this workout plan for five weeks, and you’ll lose up to 15
                        pounds.</p>
                <Link to={ '/modepage/' + this.props.id} className="btn btn-blue">Read more</Link>
            </article>
        )
    }
}

export default Mode