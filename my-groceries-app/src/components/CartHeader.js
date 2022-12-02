import React from "react"

const CartHeader = ({shoppingListItems, emptyShoppingCart}) =>{
    // console.log('props of CartHeader', props)
    return (
        <div className="cart-header">
        <h1 className="shopping-cart-title">Shopping cart 🛒</h1>
        
        {shoppingListItems.length > 0 ? 
            <button 
                onClick={()=> emptyShoppingCart() }
                className="empty-cart-btn"
            >
                Empty the shopping cart
            </button>
            :
            <h3 
                className="shopping-cart-title" 
                style={{color: "rgba(10, 58, 114, 0.466)"}}
            >
                Your shopping cart is empty now!
            </h3>
        }
    </div>
    )
}

export default CartHeader