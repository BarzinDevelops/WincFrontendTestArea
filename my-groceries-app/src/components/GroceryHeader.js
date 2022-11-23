import React from "react"

const GroceryHeader = () =>{
    return (
        <div className="grocery-list-header">
            <img src={require("../images/grocery_basket.png")}
                    width="40" 
                    height="40"
            />
            <h1 className="shopping-list-title">
                Grocery list🗒️
            </h1>
            
        </div>
    )
}

export default GroceryHeader