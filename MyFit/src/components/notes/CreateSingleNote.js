import React, {Component} from 'react'

import UserActions from '../../actions/UserActions'
import toastr from 'toastr'

class CreateSingleNote extends Component{
    constructor(props) {
        super(props)

        this.state = {
            note: {
                product: '',
                quantity: ''
            },
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.createNote = this.createNote.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value
        
        let note = this.state.note

        note[field] = value
        this.setState({ 
            note: note
        })
    }

    createNote() {
        let product = this.state.note.product;
        let quantity = this.state.note.quantity;

        if(product === '' || quantity === '') {
            toastr.error("All fields required!")
            return
        }

        UserActions.createNote(this.state.note)
    }

    render() {
        return(     
            <form>
              
                
                <fieldset>
                    <label htmlFor="product">Product</label>
                    <input type="text" name="product" value={this.state.note.product} onChange={this.handleChange} />
                </fieldset>

                <fieldset>
                    <label htmlFor="product">Quantity</label>
                    <input type="text" name="quantity" value={this.state.note.quantity} onChange={this.handleChange} />
                </fieldset>

                <fieldset>
                    <img onClick={ this.createNote } className="add-new-one" src="http://lp.techagentacademy.com/wp-content/uploads/2015/02/circle-icon-21.png" alt="plus"/>
                </fieldset>
            </form>
        )

    }

}
export default CreateSingleNote


