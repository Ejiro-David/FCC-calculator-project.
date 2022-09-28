import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [prevOperand, setprevOperand] = useState('');
  const [currOperand, setcurrOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [answer, setAnswer] = useState('');


  function OperandValidator(input, operand, stateSetter) {
    console.log('operand validator called')
    if (operand === "" && input === ".") {
      stateSetter("0.");
    } else if (operand === "0" && input === "0") {
      stateSetter("0");
    } else if (operand === "0" && input !== "0") {
      stateSetter(input);
    } else if (operand !== 0) {
      stateSetter(operand + input);
    }
    console.log(operand)
    return operand;
  }
  const handleNumPress = (e) => {
    e.preventDefault();

    let text = e.target.innerText;
    let textClass = e.target.className;

    if(prevOperand === '' && textClass === ('num' || 'decimal')){
      OperandValidator(text, prevOperand, setprevOperand);
      setDisplay(prevOperand);
      console.log('attempted to set prev operand', prevOperand)
    }





  };

  const handleCalc = (e) => {
    e.preventDefault();
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay(0);
    setprevOperand(null);
    setcurrOperand(null);
    setAnswer(null);
    setOperator(null);
  };

  return (
    <div className="App">
      <div className="calc">
        <div id="display">{display}</div>
        <form className="buttons-container">
          <button id="clear" onClick={handleClear}>
            clear
          </button>
          <button id="divide" className="operator" onClick={handleNumPress}>
            /
          </button>
          <button id="multiply" className="operator" onClick={handleNumPress}>
            *
          </button>
          <button
            id="subtract"
            className="operator negative"
            onClick={handleNumPress}
          >
            -
          </button>
          <button id="add" className="operator" onClick={handleNumPress}>
            +
          </button>
          <button id="equals" className="equals" onClick={handleCalc}>
            =
          </button>
          <button id="decimal" className="decimal" onClick={handleNumPress}>
            .
          </button>
          <button id="one" className="num" onClick={handleNumPress}>
            1
          </button>
          <button id="two" className="num" onClick={handleNumPress}>
            2
          </button>
          <button id="three" className="num" onClick={handleNumPress}>
            3
          </button>
          <button id="four" className="num" onClick={handleNumPress}>
            4
          </button>
          <button id="five" className="num" onClick={handleNumPress}>
            5
          </button>
          <button id="six" className="num" onClick={handleNumPress}>
            6
          </button>
          <button id="seven" className="num" onClick={handleNumPress}>
            7
          </button>
          <button id="eight" className="num" onClick={handleNumPress}>
            8
          </button>
          <button id="nine" className="num" onClick={handleNumPress}>
            9
          </button>
          <button id="zero" className="num" onClick={handleNumPress}>
            0
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
