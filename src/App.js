import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [opr, setOpr] = useState(null);
  const [answer, setAnswer] = useState(null)

  const handleNumPress = (e) => {
    e.preventDefault();
    let text = e.target.innerText;
    let textClass = e.target.className;
    
    if(textClass === 'num' && display === 0 && text !== '0'){
      setDisplay(text)
    }else if(textClass === 'decimal' && display === 0){
      setDisplay('0.')
    }else if(display.split('').includes('.') && textClass === 'num'){
      setDisplay(display + text)
    }else if(!display.split('').includes('.') && display !== 0){
      setDisplay(display + text)
    }

  }

  const handleOperator = (e) => {
    e.preventDefault()
    let sign = e.target.innerText;

  
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
          <button id="equals" className="equals" onClick={handleCalc}>
            =
          </button>
          <button id="decimal" className="decimal"  onClick={handleNumPress}>
            .
          </button>
          <button id="one" className="num"  onClick={handleNumPress}>
            1
          </button>
          <button id="two"  className="num" onClick={handleNumPress}>
            2
          </button>
          <button id="three"  className="num" onClick={handleNumPress}>
            3
          </button>
          <button id="four" className="num"  onClick={handleNumPress}>
            4
          </button>
          <button id="five"  className="num" onClick={handleNumPress}>
            5
          </button>
          <button id="six"  className="num" onClick={handleNumPress}>
            6
          </button>
          <button id="seven"  className="num" onClick={handleNumPress}>
            7
          </button>
          <button id="eight"  className="num" onClick={handleNumPress}>
            8
          </button>
          <button id="nine"  className="num" onClick={handleNumPress}>
            9
          </button>
          <button id="zero"  className="num" onClick={handleNumPress}>
            0
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
