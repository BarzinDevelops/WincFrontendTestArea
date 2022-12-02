import React from "react"
import List from "./List"
import CartHeader from "./CartHeader"


const ShoppingCart = ({shoppingListItems, emptyShoppingCart}) =>{
   
    // console.log('shoppingListItems in cart: ', shoppingListItems)
    return (
        
        <>
            <CartHeader 
                shoppingListItems={shoppingListItems} 
                emptyShoppingCart={emptyShoppingCart}
            />
            <div  className="cart-item-wrapper">
                halllooo
            {
                shoppingListItems.length > 0 &&
                shoppingListItems.map(cartItem =>{ 
                       
                            <List 
                                key={cartItem.id} 
                                grocery={cartItem}
                                className='cart-item'
                            />
                        
                })
            }
            </div>
            
        </>
    )
}

export default ShoppingCart