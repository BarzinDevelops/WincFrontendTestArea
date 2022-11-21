import React, {Component} from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'


class Container extends Component {
    constructor(){
        super()
        this.state = {
            groceryItems: [
                {id: 1, title : "Cheese" },
                {id: 2, title : "Milk" },
                {id: 3, title : "Ristorante Pizza Fungi" },
                {id: 4, title : "Noodles (hot ones)" },
                {id: 5, title : "Ayran" }
            ],
            shoppingListItems: [],
        }
    }

    render(){
        return(
            <div className='container-wrapper'>
                <GroceryList />
                <ShoppingCart />
            </div>
        )
    }
}

export default Container