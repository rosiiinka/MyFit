import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Mode from './Mode'

class ModesPage extends Component {
    render() {
        return (
            <div className="modes-container">
                <Mode heading="90 days diet" content="Content.." id="1" />
                <Mode heading="1,350-calorie-a-day diet" 
                content="Our 1,350-calorie-a-day diet features foods.." 
                id="2" />
               <div>
                   <Link to='/modisimo/create' className="btn btn-blue">Create Mode</Link>
               </div>
            </div>
        );
    } 
}
export default ModesPage