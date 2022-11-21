import React, {Component} from 'react'
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
            <div className='container-wrapper'>
                <GroceryList />
                <ShoppingCart />
            </div>
        )
    }
}

export default Container