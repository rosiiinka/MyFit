import dispatcher from '../dispatcher'

const productActions = {
    add: (product) => {
        dispatcher.dispatch({
            type: 'ADD_PRODUCT',
            product
        })
    }
}

export default productActions