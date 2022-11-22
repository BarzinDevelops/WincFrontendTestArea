import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    // console.log('props object in List: ', props)
    return(
        <ul className='listitems-wrapper'>
            <ListItem 
                key={props.item.id} 
                item={props.item}
                clickItem={props.clickItem}
            />
        </ul>
    );
}

export default List;