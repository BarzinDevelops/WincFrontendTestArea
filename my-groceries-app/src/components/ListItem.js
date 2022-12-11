import React from 'react'

const ListItem = ({ handleClickGroceryItem, 
                    grocery, 
                    className, 
                    amount, 
                    showQuantities
                }) =>{

    return(
        <li
            className={className}
            onClick={()=>!showQuantities && handleClickGroceryItem(grocery)}
            value={grocery.title}
        >
            {grocery.title} {amount}
        </li>
    );
}
export default ListItem;