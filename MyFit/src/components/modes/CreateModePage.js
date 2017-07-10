import React, {Component} from 'react'
import CreateMode from './CreateModeForm'

class CreateModePage extends Component{
    render() {
        return(
            <div>
                <h1>Create Mode</h1>
                <CreateMode {...this.props}/>
            </div>
        )
    }
}
export default CreateModePage