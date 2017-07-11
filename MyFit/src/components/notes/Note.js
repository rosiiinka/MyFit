import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="note">
                <div className="heading">
                    <h1>{ this.props.date }</h1>
                    <small><i>{ this.props.date }</i></small>
                </div>
                
                <div className="content">
                    <table className="field">
                        <thead>
                            <th>Product</th>
                            <th>Calories</th>
                        </thead>
                        <tbody>
                            <td>{ this.props.products }</td>
                            <td>{ this.props.calories }</td>
                        </tbody>
                    </table>
                    
                    { this.props.children }
                </div>
            </div>
        )
    }
}