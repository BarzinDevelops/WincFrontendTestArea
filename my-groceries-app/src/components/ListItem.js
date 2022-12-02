import React from 'react'


const ListItem = ({handleClickGroceryItem, grocery}) =>{
    return(
        <li
            key={grocery.id}
            className="list-item"
            onClick={()=>handleClickGroceryItem(grocery)}
            value={grocery.title}
        >
            {grocery.title}
        </li>
    );
}
export default ListItem;