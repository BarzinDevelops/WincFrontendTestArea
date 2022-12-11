import React, {Component} from 'react'

class InputField extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ""
        }
        this.handleOnInputChange = this.handleOnInputChange.bind(this)
    }

    handleOnInputChange = (event) =>{
        this.setState({userInput: event.target.value})
      }

    render() {
        return (
            <div className='search-field-wrapper'>
                <input 
                    type="text"
                    placeholder="What to buy...?" 
                    onChange={this.handleOnInputChange}
                />
                <button 
                    onClick={()=> 
                        this.state.userInput.length > 0 && 
                        this.props.handleUserInput({
                            id: this.props.currentGroceries.length+1,
                            title: this.state.userInput                   
                        })
                    }
                    className='add-grocery-item-btn'
                >
                    Add
                </button>
            </div>
        )
    }
}

export default InputField