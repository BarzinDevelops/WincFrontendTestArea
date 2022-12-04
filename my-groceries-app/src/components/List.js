import React from 'react'
import ListItem from './ListItem'

const List = ({grocery, handleClickGroceryItem, className,showQuantities}) => {
    // console.log('props object in List: ', props)
    // console.log('grocery object in List: ', grocery)
    return(
        <>
            {   

                <ListItem 
                    key={grocery.id} 
                    grocery={grocery}
                    showQuantities={showQuantities}
                    handleClickGroceryItem={handleClickGroceryItem}
                    className={className}
                    amount={showQuantities && grocery.amount > 1 ? 
                        <span>Amount: {grocery.amount}</span>: ''}
                />
            }
            
        </>
    );
}

export default List;