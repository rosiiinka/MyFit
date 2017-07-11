import React, {Component} from 'react'

import NoteActions from '../../actions/NoteActions'
import NoteStore from '../../stores/NoteStore'
import ProductStore from '../../stores/ProductStore'
import toastr from 'toastr'

class CreateSingleNote extends Component{
    constructor(props) {
        super(props)

        this.state = {
            note: {
                product: '',
                quantity: '',
                date: new Date()
            },
            products: [],
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.createNote = this.createNote.bind(this)
        this.handleCreatingNote = this.handleCreatingNote.bind(this)

        NoteStore.on(
            NoteStore.eventTypes.ADD_NOTE,
            this.handleCreatingNote
        )
    }

    componentDidMount() {
        ProductStore.getAll().then(data => {
            this.setState({
                products: data.products
            })
        })
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
        NoteActions.add(this.state.note)
    }

    handleCreatingNote(data) {
        if(data.success) {
            toastr.success(data.message)
        } else {
            toastr.error(data.message)
        }
    }

    render() {
        let options = this.state.products.map(product => (
            <option key={product._id} value={product._id}>
                {product.name}
            </option>
        ))
        return(     
            <form>
                <fieldset>
                    <label htmlFor="product">Product </label>
                    <select name='product' onChange={this.handleChange.bind(this)}>
                        {options}
                    </select>
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


