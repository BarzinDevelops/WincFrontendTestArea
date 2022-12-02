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
        return(
            <div className='search-field-wrapper'>
            <input 
                type="text"
                placeholder="what to buy?.." 
                // value={props.userInput}
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
                Add Item
            </button>
        </div>
        )
    }
}





// const InputField = (props)=>{
//     // console.log('props.item in InputField: ',props)
//     console.log('props.userInput in InputField: ',props.userInput.value)
//     return(
//         <div className='search-field-wrapper'>
//             <input 
//                 type="text"
//                 placeholder="what to buy?.." 
//                 // value={props.userInput}
//                 onChange={props.handleOnInputChange}
//             />
//             <button 
//                 onClick={()=> 
//                     props.userInput && 
//                     props.handleUserInput({
//                         id: props.currentGroceries.length+1,
//                         title: props.userInput
//                     })
//                 }
//                 className='add-grocery-item-btn'
//             >
//                 Add Item
//             </button>
//         </div>

//     )
// }

export default InputField