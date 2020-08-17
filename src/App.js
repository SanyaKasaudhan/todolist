import React, { useState } from 'react';
import './App.css';

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
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TO DO LIST</h1>
        <br/>
        <input type="text" value={inputList} placeholder="Add a items" onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
          <ol>{
            Items.map( (itemval)=>{
              return(
                <li>{itemval}</li>)
            })
          }
          </ol>
      </div>
     
    </div>

    </>
  );
}

export default App;
