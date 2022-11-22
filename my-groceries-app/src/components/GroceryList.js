import React from "react"
import List from "./List"


const GroceryList = (props) =>{
    // console.log('props.item in GroceryList: ',props)
    return (    
        <div>
            <List 
                key={props.item.id} 
                item={props.item}
                clickItem={props.clickItem}
                className='ShoppingList-item'
            />
        </div>
    )
}

export default GroceryList