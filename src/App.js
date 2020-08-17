import React, { useState } from 'react';
import './App.css';
import Todolist from './ToDoList'
const App = () => {
  const [inputList, setInputList]=useState("");
  const [Items, setItems] =useState([]);

  const itemEvent=(e)=>{
    setInputList(e.target.value);
  }
  const listOfItems = () =>{
    setItems((oldItems)=>{
      return [...oldItems, inputList];
    })
    setInputList("");

  }
  const deleteItems = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TO DO LIST</h1>
        <br/>
        <input type="text" value={inputList} placeholder="Add a items" onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
          <ol>{}
            { Items.map( (itemval,index)=>{
             return <Todolist key={index} 
             id={index}
             text={itemval} 
             onSelect={deleteItems} />;    })
          }
          </ol>
      </div>
     
    </div>

    </>
  );
}

export default App;
