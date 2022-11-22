import React from 'react'


const ListItem = ( props) =>{
    console.log('props in listItem:', props)
    // console.log('item in listItem:', grocery)
    // console.log(clickItem)
    return(
        <p>{props.item.title}</p>
        // <li
        //     key={props.item.id}
        //     className="list-item"
        //     onClick={()=> props.clickItem}
        //     value={props.item.title}
        // >
        //     {props.item.title}
        // </li>
    );
}

export default ListItem;