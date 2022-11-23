import React from "react"
import List from "./List"


const ShoppingCart = (props) =>{
    // console.log('props in cart: ', props)
    return (
        <div className="cart-item-wrapper">
            
            <List 
                key={props.item.id} 
                item={props.item}
                clickItem={props.clickItem}
                className='cart-item'
            />
        </div>
    )
}

export default ShoppingCart