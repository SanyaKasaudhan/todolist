import React from 'react';
import './App.css';

const App = () => {
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TO DO LIST</h1>
        <br/>
        <input type="text" placeholder="Add a items" />
          <button>+</button>
          <ol>
            <li></li>
          </ol>
      </div>
     
    </div>

    </>
  );
}

export default App;
