import React from "react"
import List from "./List"


const GroceryList = (props) =>{
    // const groceryItem = props.item
    // console.log('groceryItem in GroceryList: ',groceryItem)
    // console.log('item.item in GroceryList: ',item)
    // console.log('props.item in GroceryList: ',props.grocery)
    return (    
        <div>
            <List 
                key={props.grocery.id} 
                item={props.item}
                clickItem={props.clickItem}
                className='ShoppingList-item'
            />
        </div>
    )
}

export default GroceryList