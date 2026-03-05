
import React from "react";

export default function DisplayListOfItems(props){
  const listOfItems = props.listOfItems
  const newList = listOfItems.map(currItem => {
    return(
      <div key={currItem.key}>
        <input type="text" id={currItem.key} value={currItem.itemDescription}
          onChange={(event)=>{
            props.handleUpdate(event.target.value,currItem.key)
        }}></input>

        <button onClick={()=>{props.handleDelete(currItem.key)}}>Delete Item</button>
      </div>
    )
    
  });
  return(
    <div>
      {newList}
    </div>
  )
}
