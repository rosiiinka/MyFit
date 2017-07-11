import React, { Component } from 'react'
import ProductActions from '../../actions/ProductActions'
import ProductStore from '../../stores/ProductStore'
import InputText from '../common/InputText'
import InputPassword from '../common/InputPassword'
import Auth from '../../utilities/Auth'
import toastr from 'toastr'


class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '',
                calories: ''
            },
            error: ''
        }

        this.handleAddingProduct = this.handleAddingProduct.bind(this)

        ProductStore.on(
            ProductStore.eventTypes.ADD_PRODUCT,
            this.handleAddingProduct
        )
    }

    componentWillUnmount() {
        ProductStore.removeListener(
            ProductStore.eventTypes.ADD_PRODUCT,
            this.handleAddingProduct
        )
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value

        let product = this.state.product

        product[field] = value
        this.setState({ product: product })
    }

    addProduct(event) {
        event.preventDefault()
        ProductStore.add(this.state.product)
    }

    handleAddingProduct(data) {
        if (data.success) {
            toastr.success(data.message)
        } else {
            this.setState({
                error: data.message
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error !== '' ? <h1 id="error">{this.state.error}</h1> : false}
                <form>
                    <InputText name='name' placeholder='Name' handleChange={this.handleChange.bind(this)}
                        value={this.state.product.name} />
                    <InputText name='calories' placeholder='Calories' handleChange={this.handleChange.bind(this)}
                        value={this.state.product.calories} />
                    <input type='submit' onClick={this.addProduct.bind(this)} value='Add'
                        className='btn btn-default' />
                </form>
            </div>

        )
    }
}

export default RegisterForm
