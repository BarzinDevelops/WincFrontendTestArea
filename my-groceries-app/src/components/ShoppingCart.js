import React from "react"
import List from "./List"


const ShoppingCart = (props) =>{
    return (
        <div className="ShoppingCart-wrapper">
            {/* <List className='ShoppingCart-item'/> */}
            {props.item}
        </div>
    )
}

export default ShoppingCart