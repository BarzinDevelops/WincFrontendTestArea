import React from 'react'


const ListItem = ({clickItem, item}) =>{
    return(
        <li
            key={item.id}
            className="list-item"
            onClick={()=>clickItem(item)}
            value={item.title}
        >
            {item.title}
        </li>
    );
}
export default ListItem;