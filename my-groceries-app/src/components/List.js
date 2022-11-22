import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    // console.log('item object in List: ', item)
    return(
        <ul className='listitems-wrapper'>
            <ListItem 
                key={props.item.id} 
                item={props}
            />
        </ul>
    );
}

export default List;