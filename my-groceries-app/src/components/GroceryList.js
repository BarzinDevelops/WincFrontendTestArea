import React from "react";
import List from "./List";
import InputField from "./InputField";

const GroceryList = (props) => {
    // console.log('props.item in GroceryList: ',props)
{/* <InputField 
            key={props.item.length+1}
            item={props.currentGroceries}
            userInput={props.userInput}
            handleUserInput={props.handleUserInput}
            handleOnInputChange={props.handleOnInputChange}
        /> */}
  return (
    
    <>
        {/* <InputField 
            key={props.item.length+1}
            item={props.currentGroceries}
            userInput={props.userInput}
            handleUserInput={props.handleUserInput}
            handleOnInputChange={props.handleOnInputChange}
        />  */}
                    <div className="grocery-wrapper">
                    <div className="grocery-item-wrapper">
                        <div>
                        <List
                            key={props.item.id}
                            item={props.item}
                            clickItem={props.clickItem}
                            className="grocery-item"
                        />
                        </div>
                    </div>
                </div>
    </>

  );
};

export default GroceryList;
