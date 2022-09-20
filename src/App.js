import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [operand1, setOperand1] = useState();
  // const [operand2, setOperand2] = useState();
  // const [opr, setOpr] = useState("");

  const handleNumPress = (e) => {
    e.preventDefault();
    let text = e.target.innerText;
    if(display === 0){
      setDisplay(text);
    }else{
      setDisplay(display + text)
    }
    console.log(display)
  };

  const handleOperator = (e) => {
    e.preventDefault()
    let sign = e.target.innerText;
    const displayArr = display.split('')
    if(!displayArr.includes('-' | '+' | '/' | '*')){
      setDisplay(display + sign)
    }else{
      console.log('display already has a sign?')
    }

  };

  const handleCalc = (e) => {
    e.preventDefault();
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay(0);
  };

  return (
    <div className="App">
      <div className="calc">
        <div id="display">{display}</div>
        <form className="buttons-container">
          <button id="clear" onClick={handleClear}>
            clear
          </button>
          <button id="divide" className="operator" onClick={handleOperator}>
            /
          </button>
          <button id="multiply" className="operator" onClick={handleOperator}>
            *
          </button>
          <button id="subtract" className="operator" onClick={handleOperator}>
            -
          </button>
          <button id="add" className="operator" onClick={handleOperator}>
            +
          </button>
          <button id="equals" onClick={handleCalc}>
            =
          </button>
          <button id="decimal" onClick={handleNumPress}>
            .
          </button>
          <button id="one" onClick={handleNumPress}>
            1
          </button>
          <button id="two" onClick={handleNumPress}>
            2
          </button>
          <button id="three" onClick={handleNumPress}>
            3
          </button>
          <button id="four" onClick={handleNumPress}>
            4
          </button>
          <button id="five" onClick={handleNumPress}>
            5
          </button>
          <button id="six" onClick={handleNumPress}>
            6
          </button>
          <button id="seven" onClick={handleNumPress}>
            7
          </button>
          <button id="eight" onClick={handleNumPress}>
            8
          </button>
          <button id="nine" onClick={handleNumPress}>
            9
          </button>
          <button id="zero" onClick={handleNumPress}>
            0
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
