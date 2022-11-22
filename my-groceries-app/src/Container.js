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
        { id: 3, title: "shoes" },
      ],
      shoppingListItems: [
        
      ],
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
  }

  handleClickGroceryItem = (somePram) => {
        console.log('somePram', somePram)
  };

  render() {
    
    return (
      <div className="container-wrapper">
        <div className="ShoppingList-wrapper">
          <h1 className="shopping-list-title">Grocery list</h1>
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
          <h1 className="shopping-cart-title">Shopping cart</h1>
          {
            this.state.shoppingListItems.map((item) => (
                <ShoppingCart
                  key={item.id}
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
