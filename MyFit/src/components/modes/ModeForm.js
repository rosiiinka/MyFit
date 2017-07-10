import React, {Component} from 'react'

class ModeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: {
                title: '',
                content: ''
            },
            error: ''
        }

        this.handleCreateMode = this.handleCreateMode.bind(this)
    }

    createMode(){
        event.preventDefault()

        if (!this.validateMode()){
            return
        }

        toastr.success("You've successfully created a mode!")


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
                    <input type='submit' onClick={this.createMode.bind(this)} value='Register'
                           className='btn btn-default'/>
                </form>
            </div>

        )
    }
}
export default ModeForm