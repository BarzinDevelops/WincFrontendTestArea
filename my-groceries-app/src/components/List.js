import React from 'react'
import ListItem from './ListItem'

const List = ({currentGroceries, handleClickGroceryItem, className}) => {
    // console.log('props object in List: ', props)
    // console.log('currentGroceries object in List: ', currentGroceries)
    return(
        <div className="grocery-item-wrapper">
            {   
                currentGroceries.map(grocery=> {
                return (
                    <ListItem 
                        key={grocery.id} 
                        grocery={grocery}
                        handleClickGroceryItem={handleClickGroceryItem}
                    />
                )

            })}
            
        </div>
    );
}

export default List;