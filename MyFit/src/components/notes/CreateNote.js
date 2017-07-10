import React, {Component} from 'react'

import CreateSingleNote from './CreateSingleNote'

class CreateNote extends Component{
    render() {
        return(
            <div className="create-new">
                <CreateSingleNote />
            </div>
        )

    }

}
export default CreateNote


