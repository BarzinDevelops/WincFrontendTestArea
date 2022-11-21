import React from "react"
import List from "./List"


const ShoppingCart = ({item}) =>{
    return (
        <div className="ShoppingCart-wrapper">
            <h1 className="shoppin-cart-title">Shopping cart</h1>
            <List className='ShoppingCart-item'/>
        </div>
    )
}

export default ShoppingCart