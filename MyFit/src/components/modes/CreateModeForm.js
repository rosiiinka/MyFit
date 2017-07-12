import React, {Component} from 'react'
import toastr from 'toastr'
import InputText from '../common/InputText'
import ModeActions from '../../actions/ModeActions'



class CreateMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: {
                title: '',
                content: ''
            },
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.createMode = this.createMode.bind(this)
    }

    handleChange(event){
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value

        let mode = this.state.mode

        mode[field] = value
        this.setState({
            mode: mode
        })
    }

    createMode(event){
        event.preventDefault()
        
        if (!this.validateMode()){
            return
        }

        toastr.success("You've successfully created a mode!")

        ModeActions.createMode(this.state.mode)
        this.props.history.push('/modes')
    }
    
    validateMode(){
        let mode = this.state.mode
        let formIsValid = true


        if (!mode.title || mode.title.length < 3) {
            this.setState({
                error: 'Title should be at least 3 symbols'
            })
            formIsValid = false
        }
        if (!mode.content || mode.content.length < 20) {
            this.setState({
                error: 'Content should be at least 20 symbols'
            })
            formIsValid = false
        }
        return formIsValid
    }

    render() {
        return (
            <div>
                { this.state.error !== '' ? <h1 id="error">{ this.state.error }</h1> : false }
                <form>
                    <InputText name='title' placeholder='Title' handleChange={this.handleChange.bind(this)}
                               value={this.state.mode.title}/>
                    <InputText name='content' placeholder='Content' handleChange={this.handleChange.bind(this)}
                               value={this.state.mode.content}/>
                    <input type='submit' onClick={this.createMode.bind(this)} value='Create'
                           className='btn btn-default'/>
                </form>
            </div>

        )
    }
}
export default CreateMode