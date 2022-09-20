import { useState } from "react";
import "./App.css";

function App() {

  const [display, setDisplay] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    let text = e.target.innerText
    console.log(e.target.innerText)
    setDisplay(display + text)
  }


  return (
    <div className="App">
      <div className="calc">
        <div id="display">{display}</div>
        <form className="buttons-container">
          <button id="clear"  onClick={handleClick}>clear</button>
          <button id="divide"  onClick={handleClick}>/</button>
          <button id="multiply"  onClick={handleClick}>*</button>
          <button id="subtract"  onClick={handleClick}>-</button>
          <button id="add"  onClick={handleClick}>+</button>
          <button id="equals"  onClick={handleClick}>=</button>
          <button id="decimal"  onClick={handleClick}>.</button>
          <button id="one"  onClick={handleClick}>1</button>
          <button id="two"  onClick={handleClick}>2</button>
          <button id="three"  onClick={handleClick}>3</button>
          <button id="four"  onClick={handleClick}>4</button>
          <button id="five"  onClick={handleClick}>5</button>
          <button id="six"  onClick={handleClick}>6</button>
          <button id="seven"  onClick={handleClick}>7</button>
          <button id="eight"  onClick={handleClick}>8</button>
          <button id="nine"  onClick={handleClick}>9</button>
          <button id="zero"  onClick={handleClick}>0</button>
        </form>
      </div>
    </div>
  );
}


export default App;
