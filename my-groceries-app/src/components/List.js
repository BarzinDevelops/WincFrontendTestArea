import React, {Component} from 'react'
import ListItem from './ListItem'

const List = ({item}) => {
    console.log('item object in List: ', item)
    return(
        <ul className='listitems-wrapper'>
            <ListItem 
                key={item.id} 
                item={item} 
                clickItem={() => item.onItemClick(item)}
            />
        </ul>
    );
}

export default List;