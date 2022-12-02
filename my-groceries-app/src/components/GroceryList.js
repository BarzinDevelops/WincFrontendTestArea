import React from "react";
import List from "./List";

import GroceryHeader from "./GroceryHeader";
import InputField from "./InputField";

const GroceryList = (props) => {
    // console.log('props.item in GroceryList: ',props)
  return (
    
    <>
        <GroceryHeader />
        <InputField 
            key={props.currentGroceries.length+1}
            currentGroceries={props.currentGroceries}
            handleUserInput={props.handleUserInput}
        /> 
        <div className="grocery-wrapper">
            
                { 
                    props.currentGroceries.length > 0 &&
                        props.currentGroceries.map(grocery=> {
                            return(            
                                <List
                                    key={props.currentGroceries.length+1}
                                    grocery={grocery}
                                    handleClickGroceryItem={props.handleClickGroceryItem}
                                    className="list-item"
                                />
                                )
                        })
                }
            
        </div>
    </>

  );
};

export default GroceryList;
