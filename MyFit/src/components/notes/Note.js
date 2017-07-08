import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        return (
            <div className="note">
                <div className="heading">
                    <h1>Day of the week</h1>
                    <small><i>Date: 12/--/2017</i></small>
                </div>
                
                <div className="content">
                    <table className="field">
                        <thead>
                            <th>Product</th>
                            <th>Calories</th>
                        </thead>
                        <tbody>
                            <td>Пилешко филе</td><td>120/100</td>
                        </tbody>
                    </table>
                    
                    { this.props.children }
                </div>
            </div>
        )
    }
}