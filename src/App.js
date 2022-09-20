import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [operand1, setOperand1] = useState();
  const [operand2, setOperand2] = useState();
  const [opr, setOpr] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    let text = e.target.innerText;//receive input at handle click
    let operator = e.target.className === 'operator'
    console.log(operator)

    //check state of display to know if input marks the begining of 1st or 2nd opersnd
    //if state is:
    // zero begin first operand1, allow one decimal within.
    // no operand can begin with a sign or multiple zeros
// if oprt comes in update opr state and begin second operand.

    if(display === 0){
      setDisplay(text)
    }else{

      
      if(operator){
        setOperand1(display)
        console.log(display, operand1)
      } 
      setDisplay(display + text);
      
    }
  };

  const handleCalc = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-eval
    // let answer = eval(`${operand1} ${opr} ${operand2}`)
    console.log(operand1, opr, operand2)
    // setDisplay(answer)
  }

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay(0)
  }

  return (
    <div className="App">
      <div className="calc">
        <div id="display">{display}</div>
        <form className="buttons-container">
          <button id="clear" onClick={handleClear}>
            clear
          </button>
          <button id="divide" className="operator" onClick={handleClick}>
            /
          </button>
          <button id="multiply" className="operator"  onClick={handleClick}>
            *
          </button>
          <button id="subtract" className="operator"  onClick={handleClick}>
            -
          </button>
          <button id="add"  className="operator" onClick={handleClick}>
            +
          </button>
          <button id="equals" onClick={handleCalc}>
            =
          </button>
          <button id="decimal" onClick={handleClick}>
            .
          </button>
          <button id="one" onClick={handleClick}>
            1
          </button>
          <button id="two" onClick={handleClick}>
            2
          </button>
          <button id="three" onClick={handleClick}>
            3
          </button>
          <button id="four" onClick={handleClick}>
            4
          </button>
          <button id="five" onClick={handleClick}>
            5
          </button>
          <button id="six" onClick={handleClick}>
            6
          </button>
          <button id="seven" onClick={handleClick}>
            7
          </button>
          <button id="eight" onClick={handleClick}>
            8
          </button>
          <button id="nine" onClick={handleClick}>
            9
          </button>
          <button id="zero" onClick={handleClick}>
            0
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
