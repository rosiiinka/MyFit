import React, {Component} from 'react'
import CreateModeForm from './CreateModeForm'

class CreateModePage extends Component {
    render() {
        return(
            <div>
                <h1>Create Mode</h1>
                 <CreateModeForm { ...this.props } />
            </div>
        )
    }
}
export default CreateModePage