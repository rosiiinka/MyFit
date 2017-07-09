import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import ProductData from '../database/ProductData'

class ProductStore extends EventEmitter {
    add (product) {
        ProductData
        .add(product) 
        .then(data => this.emit(this.eventTypes.ADD_PRODUCT, data))
    }

    handleAction (action) {
        switch (action.type) {
            case 'ADD_PRODUCT': {
                this.add(action.product)
                break
            }
            default: break
        }
    }
}

let productStore = new ProductStore()

productStore.eventTypes = {
    ADD_PRODUCT: 'product_add',
}

dispatcher.register(productStore.handleAction.bind(productStore))
export default productStore