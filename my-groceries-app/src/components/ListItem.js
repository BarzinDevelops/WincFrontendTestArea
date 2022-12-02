import React from 'react'


const ListItem = ({handleClickGroceryItem, grocery, className}) =>{
    console.log('grocery object in ListItem: ', grocery)
    return(
        <li
            key={grocery.id}
            className={className}
            onClick={()=>handleClickGroceryItem(grocery)}
            value={grocery.title}
        >
            {grocery.title}
        </li>
    );
}
export default ListItem;