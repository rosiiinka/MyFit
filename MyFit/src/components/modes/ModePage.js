import React, {Component} from 'react'
import UserStore from '../../stores/UserStore'

class ModePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modes: [
                {id: 1, title: 'Title1', content: 'Content1'},
                {id: 2, title: 'Title2', content: 'Content2'}
            ]
        }
    }

    findElement(arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == value) {
                return arr[i]
            }
        }
    }

    render() {
        let paramId = this.props.match.params.id
        let mode = this.findElement(this.state.modes, paramId)

        return (
            <div className="single-mode">
                <article>
                    <h2>{ mode.title }</h2>
                    <p>{ mode.content }</p>
                </article>


            </div> 
        );
    }
}
export default ModePage
