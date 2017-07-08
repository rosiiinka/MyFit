import React, {Component} from 'react'
import { Link } from 'react-router-dom'
  
import Mode from './Mode'

class ModesPage extends Component {
    render() {
        return (
            <div className="modes-container">
                <Mode heading="90 days diet" content="content" id="1"/>

                <article>
                    <h2>1,350-calorie-a-day diet</h2>
                    <p>Our 1,350-calorie-a-day diet features foods that are great at stopping that famished feeling.
                        Plus, you’ll get 25 grams of slimming fiber a day. Just pick one breakfast, lunch, dinner, and
                        snack each day. Stick to our diet and this workout plan for five weeks, and you’ll lose up to 15
                        pounds.</p>
                    <Link to="/mode" className="btn btn-blue">Read more</Link>
                </article>

            </div>
        );
    }
}
export default ModesPage