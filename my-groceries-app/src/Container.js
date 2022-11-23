import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Cheese" },
        { id: 2, title: "Milk" },
        // { id: 3, title: "shoes" },
      ],
      shoppingListItems: [
        
      ],
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
  }

  handleClickGroceryItem = (somePram) =>  {
    // console.log(somePram)
    this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
  }
        
  emptyShoppingCart = () => {
        console.log('empty cart!')
  }

  render() {
    
    return (
      <div className="container-wrapper">
        <div className="ShoppingList-wrapper">
            <div className="shoppinglist-header">
                <h1 className="shopping-list-title">Grocery list</h1>
            </div>
            {
                this.state.groceryItems.map((item) => (
                    <GroceryList
                    key={item.id}
                    item={item}
                    clickItem={this.handleClickGroceryItem}
                    />
                ))
            }
        </div>
        <div className="ShoppingCart-wrapper">
            <div className="cart-header">
                <h1 className="shopping-cart-title">Shopping cart</h1>
                <button 
                    onClick={this.emptyShoppingCart }
                    className="empty-cart-btn"
                >
                    Empty the shopping cart
                </button>
            </div>
            
            {
                this.state.shoppingListItems.map((item) => (
                    <ShoppingCart
                    key={item.length}
                    item={item}
                    />
                ))
            }
        </div>
      </div>
    );
  }
}

export default Container;
