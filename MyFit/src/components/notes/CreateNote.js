import React, {Component} from 'react'

import CreateSingleNote from './CreateSingleNote'

class CreateNote extends Component{
    render() {
        return(
            <div className="create-new">
                <CreateSingleNote />
                
                <div className="button">
                    <input className="btn btn-blue x100" type="submit" value="submit"/>
                </div>
            </div>
        )

    }

}
export default CreateNote


