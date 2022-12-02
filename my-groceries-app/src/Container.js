import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

import CartHeader from "./components/CartHeader";
import InputField from "./components/InputField";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        // { id: 1, title: "Cheese" },
        // { id: 2, title: "Milk" },
        // { id: 3, title: "shoes" },
      ],
      shoppingListItems: [
        
      ],
      // userInput: ""
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleClickGroceryItem = (somePram) =>  {
    console.log('somePram =>', somePram)
    this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
  }
        
  emptyShoppingCart = () => {
        // console.log('empty cart!')
        this.setState({shoppingListItems: []})
  }


  handleUserInput = (input) =>{
    // console.log('added', input)
    this.setState(()=> {
        
        let updatedGrocery = [...this.state.groceryItems, input]
        console.log('updatedGrocery', updatedGrocery)
        return {groceryItems : [...updatedGrocery]}
    })
  }

  render() {
    
    return (
      <div className="container-wrapper">

        <div className="grocery-list-wrapper">
          {
            <GroceryList
            key={this.state.groceryItems.length+1}
            currentGroceries={this.state.groceryItems}
            handleClickGroceryItem={this.handleClickGroceryItem}
            handleUserInput={this.handleUserInput}
        />
          }
            
        </div>


        <div className="ShoppingCart-wrapper">
            <CartHeader 
                groceryItems={this.state.groceryItems} 
                emptyShoppingCart={this.emptyShoppingCart} 
            />
            {
              console.log('this.state.shoppingListItems =>',this.state.shoppingListItems)
            }
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
