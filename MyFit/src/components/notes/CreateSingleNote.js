import React, {Component} from 'react'

class CreateSingleNote extends Component{
    constructor(props) {
        super(props)

        this.state = {
            input: {
                product: '',
                quantity: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.createNewNote = this.createNewNote.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value
        
        let input = this.state.input

        input[field] = value
        this.setState({ 
            input: input
        })
    }

    createNewNote() {
        let field = 'notes'
        let product = this.state.input.product

        console.log(this.state.input.product)
    }

    render() {
        return(     
            <form>
                <fieldset>
                    <label htmlFor="product">Product</label>
                    <input type="text" name="product" value={this.state.input.product} onChange={this.handleChange} />
                </fieldset>

                <fieldset>
                    <label htmlFor="product">Quantity</label>
                    <input type="text" name="quantity" value={this.state.input.quantity} onChange={this.handleChange} />
                </fieldset>

                <fieldset>
                    <img onClick={ this.createNewNote } className="add-new-one" src="/images/plus.png" alt="plus"/>
                </fieldset>
            </form>
        )

    }

}
export default CreateSingleNote


