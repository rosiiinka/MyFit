import React, { Component } from 'react'

class InputText extends Component {
    render () {
        return (
            <div className='form-group'>
                <label htmlFor={this.props.name}>{this.props.placeholder}</label>
                <input
                    type='text'
                    name={this.props.name}
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    className='form-control'
                    value={this.props.value}
                    onChange={this.props.handleChange} />
            </div >
        )
    }
}

export default InputText
