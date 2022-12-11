import React from "react"

const CartHeader = ({shoppingListItems, emptyShoppingCart}) =>{
    return (
        <div className="cart-header">
            <div className="cart-title">
                <img className="cart-icon"
                    src={require("../images/shopping_cart_icon.png")}
                    alt="shopping cart"
                />
                <h1 className="shopping-cart-title">Shopping cart </h1>
            </div>
            
            <div className="cart-empty">
                {
                    shoppingListItems.length > 0 ? 
                        <button 
                            onClick={()=> emptyShoppingCart() }
                            className="empty-cart-btn"
                        >
                            Empty Cart
                        </button>
                    :
                        <span 
                            className="shopping-cart-message" 
                            
                        >
                            Your cart is empty!
                        </span>
                }
            </div>
    </div>
    )
}

export default CartHeader