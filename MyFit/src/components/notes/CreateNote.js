import React, {Component} from 'react'

class CreateNote extends Component{
    constructor(props) {
        super(props)

        this.state = {
            input: {
                product: '',
                calories: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        let target = event.target
        let field = target.name
        let value = target.value
        
        let input = this.state.input

        input[field] = value
        this.setState({ 
            input: input
        })
    }

    render() {
        return(
            <div className="create-new">
                <form>
                    <fieldset>
                        <label htmlFor="product">Product</label>
                        <input type="text" name="product" value={this.state.input.product} onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="product">Calories</label>
                        <input type="text" name="calories" value={this.state.input.calories} onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <img className="add-new-one" src="/images/plus.png" alt="plus"/>
                    </fieldset>
                </form>
                
                <div className="button">
                    <input className="btn btn-blue x100" type="submit" value="submit"/>
                </div>
            </div>
        )

    }

}
export default CreateNote


