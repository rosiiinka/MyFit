import React, { Component } from 'react'
import ProductForm from './ProductForm'

class ProductPage extends Component {
    render () {
        return (
            <div className='product-container'>
                <h1 className='centered'>Add Product</h1>
                <ProductForm {...this.props} />
            </div>
        )
    }
}

export default ProductPage
