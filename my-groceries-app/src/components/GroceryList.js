import React from "react"
import List from "./List"


const ShoppingList = ({item}) =>{
    return (
        <div className="ShoppingList-wrapper">
            <h1 className="shoppin-list-title">Shopping list</h1>
            <List  className='ShoppingList-item'/>
        </div>
    )
}

export default ShoppingList