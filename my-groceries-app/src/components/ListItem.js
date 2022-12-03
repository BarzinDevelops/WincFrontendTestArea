import React from 'react'


const ListItem = ({handleClickGroceryItem, grocery, className, amount}) =>{
    // console.log('grocery object in ListItem: ', grocery)
    return(
        <li
            key={grocery.id}
            className={className}
            onClick={()=>handleClickGroceryItem(grocery)}
            value={grocery.title}
        >
            {grocery.title} {amount}
        </li>
    );
}
export default ListItem;