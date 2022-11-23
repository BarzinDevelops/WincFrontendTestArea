import React from 'react'



const InputField = ()=>{
    return(
        <div className='search-field-wrapper'>
            <input 
                type="text"
                placeholder="what to buy?.." 
            />
            <button className='add-grocery-item-btn'>Add Item</button>
        </div>

    )
}

export default InputField