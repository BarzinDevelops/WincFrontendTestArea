import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'


class Container extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <>
                <GroceryList />
                <ShoppingCart />
            </>
        )
    }
}