import React from "react"
// import List from "./List"


const GroceryList = (props) =>{
    
    console.log('item object in Container: ',props.item.title)
    return (
        <div> {
            // {item}
        }</div>
       
        // <div className="ShoppingList-wrapper">
        //     <h1 className="shoppin-list-title">Shopping list</h1>
        //     <List item={item}  className='ShoppingList-item'/>
        // </div>
    )
}

export default GroceryList