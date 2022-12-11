import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      shoppingListItems: [
        ],
    };

    // this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.addAmountToItem = this.addAmountToItem.bind(this)
  }



  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  addAmountToItem = (itemToChange) =>{
    // console.log('itemIndexToChange',itemIndexToChange)



    const updatedShoppingListItems = 
      this.state.shoppingListItems.map((obj) =>{
        if(obj.title === itemToChange.title )
        {return {...obj, amount: obj.amount +1}}
        return obj
      
      })
this.setState(()=>{
  return {shoppingListItems: updatedShoppingListItems}
})

            // console.log('updatedShoppingListItems', updatedShoppingListItems)
  }

  handleClickGroceryItem = (somePram) =>  {
    //check if arguments title value exists in shoppingListItems:
    let isInShoppingList = false;
    const shoppingCartItems = this.state.shoppingListItems

    
    for(let item of shoppingCartItems){
     
       if(item.title === somePram.title) {
     
        this.addAmountToItem(item)
        isInShoppingList = true
       } 
    }
    
    // console.log('isInShoppingList', isInShoppingList)
    if(!isInShoppingList) {
      // console.log('if(!isInShoppingList)')
      somePram.amount = 1
      this.setState({shoppingListItems: [...this.state.shoppingListItems, somePram]})
   } 

  //  console.log('shoppingGroceryItems', this.state.groceryItems)

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
            // usedKey={key}
            currentGroceries={this.state.groceryItems}
            handleClickGroceryItem={this.handleClickGroceryItem}
            handleUserInput={this.handleUserInput}
        />
          }
            
        </div>


        <div className="ShoppingCart-wrapper">
            {
              <ShoppingCart
                key={this.state.shoppingListItems.length+1}
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
