import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";
import GroceryHeader from "./components/GroceryHeader";
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
      userInput: ""
    };

    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleClickGroceryItem = (somePram) =>  {
    // console.log(somePram)
    this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
  }
        
  emptyShoppingCart = () => {
        // console.log('empty cart!')
        this.setState({shoppingListItems: []})
  }

  handleOnInputChange = (event) =>{
    this.setState({userInput: event.target.value})
  }

  handleUserInput = (input) =>{
    // console.log('added', input)
    this.setState(()=> {
        
        let updatedGrocery = [...this.state.groceryItems, input]
        console.log('updatedGrocery', updatedGrocery)
        updatedGrocery = new Set(updatedGrocery)
        console.log('unique -> updatedGrocery', updatedGrocery)
        return {groceryItems : [...updatedGrocery]}
    })
  }

  render() {
    
    return (
      <div className="container-wrapper">

        <div className="ShoppingList-wrapper">
            <GroceryHeader />
            <InputField 
                key={this.state.groceryItems.length+1}
                item={this.state.groceryItems}
                userInput={this.state.userInput}
                
                handleOnInputChange={this.handleOnInputChange}
                handleUserInput={this.handleUserInput}

            />  
            {
                this.state.groceryItems.map((item) => (
                    <GroceryList
                        key={item.id}
                        item={item}
                        clickItem={this.handleClickGroceryItem}
                        handleUserInput={this.handleUserInput}
                        currentGroceries={this.state.groceryItems}
                        handleOnInputChange={this.handleOnInputChange}
                        userInput={this.state.userInput}
                    />
                ))
            }
        </div>


        <div className="ShoppingCart-wrapper">
            <div className="cart-header">
                <h1 className="shopping-cart-title">Shopping cart 🛒</h1>
                
                {this.state.shoppingListItems.length > 0 ? 
                    <button 
                        onClick={this.emptyShoppingCart }
                        className="empty-cart-btn"
                    >
                        Empty the shopping cart
                    </button>
                    :
                    <h3 
                        className="shopping-cart-title" 
                        style={{color: "rgba(10, 58, 114, 0.466)"}}
                    >
                        Your shopping cart is empty now!
                    </h3>
                }
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
