import React from "react"
import List from "./List"
import CartHeader from "./CartHeader"


const ShoppingCart = ({shoppingListItems, emptyShoppingCart}) =>{
    return (
        <>
            <CartHeader 
                shoppingListItems={shoppingListItems} 
                emptyShoppingCart={emptyShoppingCart}
            />
            <div  className="cart-item-wrapper">
                {
                    shoppingListItems.length > 0 &&
                    shoppingListItems.map(cartItem =>                       
                        <List 
                            key={cartItem.id} 
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