import React, {Component} from 'react'
import GroceryList from './components/GroceryList'
// import ShoppingCart from './components/ShoppingCart'


class Container extends Component {
    constructor(){
        super()
        this.state = {
            groceryItems: [
                {id: 1, title : "Cheese" },
                {id: 2, title : "Milk" }
            ],
            shoppingListItems: [],
        }
    }

    handleClickGroceryItem = ()=>{

    }

    render(){
        // console.log('item object in Container: ', this.groceryItems)
        this.state.groceryItems.map(item => 
         <GroceryList key={item.id} item={item}/>
    )

        return(
            <div className='container-wrapper'>
                {/* {groceryItems} */}
                {/* <ShoppingCart /> */}
            </div>
        )
    }
}

export default Container