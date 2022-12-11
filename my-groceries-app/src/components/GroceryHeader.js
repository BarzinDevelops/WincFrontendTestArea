import React from "react"

const GroceryHeader = () =>{
    return (
        <div className="grocery-list-title">
            <img 
                className="grocery-icon" 
                src={require("../images/grocery_basket.png")}
                alt="grocery bag"
            />
            <h1 className="shopping-list-title">
                Grocery list
            </h1>            
        </div>
    )
}

export default GroceryHeader