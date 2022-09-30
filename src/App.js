import { useReducer } from "react";
import { useState } from "react";
import "./App.css";

//create reducer for diff types: append, calc, del, 
const initialState = {};

function reducer (state, action){
  switch (action.type){
    
  }
}




function App() {
  const [display, setDisplay] = useState(0);
  const [prevOperand, setPrevOperand] = useState(null);
  const [currOperand, setCurrOperand] = useState(null)
  const [operator, setOperator] = useState(null);


  const handleClick = (e) => {
    e.preventDefault()
    let text = e.target.innerHTML;
    let textClass = e.target.className;
    console.log(text, textClass)
  };

  return (
    <div className="App">
      <div className="calc">
        <div id="display">{display}</div>
        <form className="buttons-container">
          <button id="clear" onClick={handleClick}>
            clear
          </button>
          <button id="divide" className="operator" onClick={handleClick}>
            /
          </button>
          <button id="multiply" className="operator" onClick={handleClick}>
            *
          </button>
          <button
            id="subtract"
            className="operator negative"
            onClick={handleClick}
          >
            -
          </button>
          <button id="add" className="operator" onClick={handleClick}>
            +
          </button>
          <button id="equals" className="equals" onClick={handleClick}>
            =
          </button>
          <button id="decimal" className="decimal" onClick={handleClick}>
            .
          </button>
          <button id="one" className="num" onClick={handleClick}>
            1
          </button>
          <button id="two" className="num" onClick={handleClick}>
            2
          </button>
          <button id="three" className="num" onClick={handleClick}>
            3
          </button>
          <button id="four" className="num" onClick={handleClick}>
            4
          </button>
          <button id="five" className="num" onClick={handleClick}>
            5
          </button>
          <button id="six" className="num" onClick={handleClick}>
            6
          </button>
          <button id="seven" className="num" onClick={handleClick}>
            7
          </button>
          <button id="eight" className="num" onClick={handleClick}>
            8
          </button>
          <button id="nine" className="num" onClick={handleClick}>
            9
          </button>
          <button id="zero" className="num" onClick={handleClick}>
            0
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
