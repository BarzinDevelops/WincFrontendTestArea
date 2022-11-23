import React from 'react'



const InputField = (props)=>{
    // console.log('props.item in InputField: ',props)
    return(
        <div className='search-field-wrapper'>
            <input 
                type="text"
                placeholder="what to buy?.." 
                // value={props.userInput}
                onChange={props.handleOnInputChange}
            />
            <button 
                onClick={()=> 
                    props.userInput && 
                    props.handleUserInput({
                        id: props.item.length+1,
                        title: props.userInput
                })}
                className='add-grocery-item-btn'
            >
                Add Item
            </button>
        </div>

    )
}

export default InputField