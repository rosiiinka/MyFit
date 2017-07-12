import React, {Component} from 'react'

import ModeStore from '../../stores/ModeStore'

class ModePage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            modes: [],
            mode: {}
        }

        ModeStore.getAll().then(data => {
            this.setState({
                modes: data.mode
            })
        })
    }

    componentDidMount() {
        ModeStore.getAll().then(data => {
            this.setState({
                modes: data.mode
            })

            let { modes } = this.state

            if(modes !== undefined || modes !== null) {
                for(let i = 0; i < modes.length; i++) {
                    if(modes[i]['_id'] === this.props.match.params.id) {
                        this.setState({
                            mode: modes[i]
                        })
                    }
                }
            }
        }) 
    }

    render() {
        var dateFormat = require('dateformat')
        
        return (
            <div className="single-mode">
                <article>
                    <h2>{ this.state.mode.title } </h2>
                    <small><i>{ dateFormat(this.state.mode.date, "dddd, mmmm dS, yyyy") }</i></small>
                    <p> { this.state.mode.content } </p>
                </article>
            </div> 
        );
    }
}
export default ModePage
