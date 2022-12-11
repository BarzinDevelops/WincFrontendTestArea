import React from 'react'
import ListItem from './ListItem'

const List = ({grocery, handleClickGroceryItem, className,showQuantities}) => {
    return(
        <>
            {   
                <ListItem 
                    key={grocery.id+1} 
                    grocery={grocery}
                    showQuantities={showQuantities}
                    handleClickGroceryItem={handleClickGroceryItem}
                    className={className}
                    amount={showQuantities && grocery.amount >= 1 ? 
                        <span>Amount: {grocery.amount}</span>: ''}
                />
            }
        </>
    );
}

export default List;