import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props) {
        super(props)

        this.setDay = this.setDay.bind(this)
        this.state = {
            day: '',
            dateInFormat: ''
        }
    }
    
    componentDidMount() {
        this.setState({
            day: this.setDay(new Date(this.props.date)),
            dateInFormat: new Date(this.props.date).toDateString()
        })
    }

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
        }

        return result
    }

    render() {
        return (
            <div className="note">
                <div className="heading">
                    <h1>{this.state.day}</h1>
                    <small><i>{this.state.dateInFormat}</i></small>
                </div>

                <div className="content">
                    <table className="field">
                        <thead>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Calories</th>
                        </thead>
                        <tbody>
                            <td>{this.props.products}</td>
                            <td>{this.props.quantity}</td>
                            <td>{this.props.calories}</td>
                        </tbody>
                    </table>

                    {this.props.children}
                </div>
            </div>
        )
    }
}