import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import toastr from 'toastr'

import Mode from './Mode'
import ModeStore from '../../stores/ModeStore'
import ModeActions from '../../actions/ModeActions'

class ModesPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            modes: []
        }
    }

     componentDidMount() {
        ModeStore.getAll().then(data => {
            this.setState({
                modes: data.mode
            })
        })
    }

    handleAddingMode(data) {
       if(data.success) {
            toastr.success(data.message)
        } else {
            toastr.error(data.message)
        }
    }

    render() {
        let { modes } = this.state
        let mode = modes.map( (mode, index) => 
            <Mode heading={ mode.title } content={ mode.content } date={ mode.date } id={ mode._id } />
        )

        return (
            <div className="modes-container">
                <div className="modes">
                    { mode }
                </div>
                
                <div className="create-container">
                    <div className="btn-create">
                        <Link to='/modisimo/create' className="btn btn-green">Create Mode</Link>
                    </div>
                </div>
            </div>
        );
    } 
}
export default ModesPage 