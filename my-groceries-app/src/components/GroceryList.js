import React from "react";
import List from "./List";

import GroceryHeader from "./GroceryHeader";
import InputField from "./InputField";

const GroceryList = ({currentGroceries, handleClickGroceryItem, handleUserInput}) => {
  return (   
    <div className="grocery-header">
        <GroceryHeader />
        <InputField 
            currentGroceries={currentGroceries}
            handleUserInput={handleUserInput}
        /> 
        <div className="grocery-wrapper">            
            { 
                currentGroceries.length > 0 &&
                    currentGroceries.map(grocery=> {
                        return(            
                            <List
                                key={grocery.id}
                                grocery={grocery}
                                handleClickGroceryItem={handleClickGroceryItem}
                                className="list-item"
                            />
                            )
                    })
            }            
        </div>
    </div>
  )
}

export default GroceryList;
