import React, {Component} from 'react'
import CreateMode from './CreateMode'

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
                    <h1>Create Mode</h1>
                    <CreateMode {...this.props}/>
                </div>
            </div>
        );
    } 
}
export default ModesPage