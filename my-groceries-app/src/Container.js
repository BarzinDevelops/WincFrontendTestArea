import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      shoppingListItems: [],
      groceryListCounter : 0,
      cartListCounter : 0,
    };

    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.addAmountToItem = this.addAmountToItem.bind(this)
  }

  addAmountToItem = itemToChange => {
      const updatedShoppingListItems = 
        this.state.shoppingListItems.map((obj) =>{
          if(obj.title === itemToChange.title )
          {return {...obj, amount: obj.amount +1}}
          return obj
        });
      this.setState(()=>{
        return {shoppingListItems: updatedShoppingListItems}
      });
  }

  handleClickGroceryItem = somePram =>  {
    //check if arguments title value exists in shoppingListItems:
    let isInShoppingList = false;
    for(let item of this.state.shoppingListItems){    
       if(item.title === somePram.title) {     
        this.addAmountToItem(item)
        isInShoppingList = true
       } 
    }
    
    if(!isInShoppingList) {
      somePram.amount = 1
      this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
    } 
  }
        

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  emptyShoppingCart = () => 
    this.setState({shoppingListItems: []})

  handleUserInput = (input) =>{
    this.setState(()=> {
        let updatedGrocery = [...this.state.groceryItems, input]
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
            {
              <ShoppingCart
                key='ShoppingCart'
                groceries={this.state.groceryItems}
                shoppingListItems={this.state.shoppingListItems}
                emptyShoppingCart={this.emptyShoppingCart}
              />
            }
        </div>
      </div>
    )
  }
}

export default Container;
