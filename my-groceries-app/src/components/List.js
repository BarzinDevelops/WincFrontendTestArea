import React from 'react'
import ListItem from './ListItem'

const List = ({grocery, handleClickGroceryItem, className}) => {
    // console.log('props object in List: ', props)
    console.log('grocery object in List: ', grocery)
    return(
        <>
            {   
                <ListItem 
                    key={grocery.id} 
                    grocery={grocery}
                    handleClickGroceryItem={handleClickGroceryItem}
                    className={className}
                />
            }
            
        </>
    );
}

export default List;