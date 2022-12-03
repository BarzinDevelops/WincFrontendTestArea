import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      shoppingListItems: [
        {id: 1, title: 'cake', amount: 3},
        {id: 2, title: 'chocola', amount: 2}],
    };

    // this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.addAmountToItem = this.addAmountToItem.bind(this)
  }



  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  addAmountToItem = (itemToChange) =>{
      
 console.log('previous state shoppingListItems: ', this.state.shoppingListItems)

       
           let updatedShoppingList = this.state.shoppingListItems
              .map(obj => {
                // obj.title === itemToChange.title && obj.amout + 1
                // console.log('obj', obj)
                // console.log('obj.title', obj.title)
                // console.log('itemToChange.title', itemToChange.title)
                // if (obj.title === itemToChange.title) 
                //     { 
                //       ...obj,
                //       amount: itemToChange + 1
                //     } 
                    // obj.amount = itemToChange.amount + 1
                return obj
                // console.log('obj', obj)
                // return ''
              }
                  
              );
console.log('updatedShoppingList', updatedShoppingList)
            // this.setState({shoppingListItems: updatedShoppingList})
            // console.log('updatedShoppingList: ', 
            // updatedShoppingList)
     
      
  }

  handleClickGroceryItem = (somePram) =>  {
    console.log('somePram =>', somePram)


    //check if arguments title value exists in shoppingListItems:
    // const shoppingListItems = this.state.shoppingListItems
    // for(let item of shoppingListItems){
      
    //    if(item.title === somePram.title) {
    //       this.addAmountToItem(item)
    //    } 
    // }

    somePram.amount = 1
    this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
    // this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
  }
        

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  emptyShoppingCart = () => {
        // console.log('empty cart!')
        this.setState({shoppingListItems: []})
  }


  handleUserInput = (input) =>{
    // console.log('added', input)
    this.setState(()=> {
        
        let updatedGrocery = [...this.state.groceryItems, input]
        // console.log('updatedGrocery', updatedGrocery)
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
                key={this.state.shoppingListItems.id}
                shoppingListItems={this.state.shoppingListItems}
                emptyShoppingCart={this.emptyShoppingCart}
              />
            }
        </div>
      </div>
    );
  }
}

export default Container;
