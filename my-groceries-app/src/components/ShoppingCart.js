import React from "react"
import List from "./List"
import CartHeader from "./CartHeader"


const ShoppingCart = ({shoppingListItems, emptyShoppingCart}) =>{
   
    // console.log('shoppingListItems in cart: ', shoppingListItems)
    return (
        
        <>
            <CartHeader 
                key={shoppingListItems.length+1}
                shoppingListItems={shoppingListItems} 
                emptyShoppingCart={emptyShoppingCart}
            />
            <div  className="cart-item-wrapper">
            {
                shoppingListItems.length > 0 &&
                shoppingListItems.map(cartItem =>
                       
                            <List 
                                key={cartItem.id+1} 
                                grocery={cartItem}
                                className='cart-item'
                                showQuantities={true}
                            />
                        
                )
            }
            </div>
            
        </>
    )
}

export default ShoppingCart