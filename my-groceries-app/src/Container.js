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
  }

  handleClickGroceryItem = (clickedGrocery) => {
        console.log('clickedGrocery',clickedGrocery)
  };

  render() {
    // console.log('item object in Container: ', this.groceryItems)
    const groceryItems = this.state.groceryItems.map((item) => (
      <GroceryList
        key={item.id}
        grocery={item}
        clickItem={()=>this.handleClickGroceryItem}
      />
    ));
    const shoppingCartItems = this.state.shoppingListItems.map((item) => (
      <ShoppingCart
        key={item.id}
        item={item}
      />
    ));

    return (
      <div className="container-wrapper">
        <div className="ShoppingList-wrapper">
          <h1 className="shopping-list-title">Grocery list</h1>
          {groceryItems}
        </div>
        <div className="ShoppingCart-wrapper">
          <h1 className="shopping-cart-title">Shopping cart</h1>
          {shoppingCartItems}
        </div>
      </div>
    );
  }
}

export default Container;
