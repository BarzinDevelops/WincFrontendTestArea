import React from "react"
import List from "./List"


const ShoppingCart = ({item}) =>{
    return (
        <div className="ShoppingCart-wrapper">
            <List className='ShoppingCart-item'/>
        </div>
    )
}

export default ShoppingCart