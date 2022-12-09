import React from "react"

const GroceryHeader = () =>{
    return (
        <div className="grocery-list-header">
            <img 
                className="grocery-icon" 
                src={require("../images/grocery_basket.png")}
            />
            <h1 className="shopping-list-title">
                Grocery list🗒️
            </h1>
            
        </div>
    )
}

export default GroceryHeader