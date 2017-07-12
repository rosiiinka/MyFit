import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props) {
        super(props)

        this.setDay = this.setDay.bind(this)
        this.mergeProducts = this.mergeProducts.bind(this)
        this.state = {
            day: '',
            dateInFormat: '',
            combined: []
        }
    }
    
    mergeProducts(products, quantity) {
        let combined = []
        for (let product in products) {
            let currentProduct = products[product]
            let currentQuantity = quantity[product]
            combined.push({
                name: currentProduct.name,
                calories: currentProduct.calories,
                quantity: currentQuantity,
                id: currentProduct._id
            })
        }
        return combined
    }

    componentWillReceiveProps(nextProps){
        let combined = this.state.combined
        combined = this.mergeProducts(nextProps.products, nextProps.quantity)
        this.setState({
            combined
        })
    }

    componentDidMount() {
        let combined = this.state.combined
        combined = this.mergeProducts(this.props.products, this.props.quantity)
        this.setState({
            day: this.setDay(new Date(this.props.date)),
            dateInFormat: new Date(this.props.date).toDateString(),
            combined
        })
    }

    component

    setDay(date) {
        let result = ''
        switch (date.getDay()) {
            case 0: {
                result = 'Sunday'
                break
            }
            case 1: {
                result = 'Monday'
                break
            }
            case 2: {
                result = 'Tuesday'
                break
            }
            case 3: {
                result = 'Wednesday'
                break
            }
            case 4: {
                result = 'Thursday'
                break
            }
            case 5: {
                result = 'Friday'
                break
            }
            case 6: {
                result = 'Saturday' 
                break
            }
            default: break
        }

        return result
    }

    render() {
        let products = this.state.combined.map((product, id) => (
            <tr key={id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{ ((product.calories / 100) * product.quantity).toFixed(2) }</td>
            </tr>
        ))
        return (
            <div className="note">
                <div className="heading">
                    <h1>{this.state.day}</h1>
                    <small><i>{this.state.dateInFormat}</i></small>
                </div>

                <div className="content">
                    <table className="field">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products}
                        </tbody>
                    </table>

                    {this.props.children}
                </div>
            </div>
        )
    }
}