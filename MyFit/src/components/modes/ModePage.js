import React, {Component} from 'react'

import ModeStore from '../../stores/ModeStore'

class ModePage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            modes: []
        }

        ModeStore.getAll().then(data => {
            this.setState({
                modes: data.mode
            })
        })

        this.getElement = this.getElement.bind(this)
    }

    componentDidMount() {
        ModeStore.getAll().then(data => {
            this.setState({
                modes: data.mode
            })
        })
    }

    getElement(arr, value) {
        if(!this.state.modes) {
            return
        } else {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i]._id === value) {
                    return arr[i]
                }
            }
        }
    }

    render() {
        let paramId = this.props.match.params.id
        let mode = this.getElement(this.state.modes, paramId)

        return (
            <div className="single-mode">
                <article>
                    <h2>{ mode }</h2>
                    <p></p>
                </article>
            </div> 
        );
    }
}
export default ModePage
