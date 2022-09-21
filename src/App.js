import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [answer, setAnswer] = useState(null);

  const handlePress = (e) => {
    e.preventDefault();
    let text = e.target.innerText;
    let textClass = e.target.className;


    if(operand1 === null && operator === null && textClass === 'num'){
      if(display === 0 && text !== '0'){
        if(text === '.'){
          setDisplay("0.");
        }else{
          setDisplay(text)
        }
      }else if(display !== 0){
        if(text !== '.' || (text === '.' && !display.includes('.'))){
          setDisplay(display + text)
        }
      }
    }else if(textClass === 'operator' && operand2 === null){


    }


  };


  const handleCalc = (e) => {
    e.preventDefault();
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay(0);
    setOperand1(null);
    setOperand2(null);
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
          <button id="divide" className="operator" onClick={handlePress}>
            /
          </button>
          <button id="multiply" className="operator" onClick={handlePress}>
            *
          </button>
          <button
            id="subtract"
            className="operator negative"
            onClick={handlePress}
          >
            -
          </button>
          <button id="add" className="operator" onClick={handlePress}>
            +
          </button>
          <button id="equals" className="equals" onClick={handleCalc}>
            =
          </button>
          <button id="decimal" className="decimal num" onClick={handlePress}>
            .
          </button>
          <button id="one" className="num" onClick={handlePress}>
            1
          </button>
          <button id="two" className="num" onClick={handlePress}>
            2
          </button>
          <button id="three" className="num" onClick={handlePress}>
            3
          </button>
          <button id="four" className="num" onClick={handlePress}>
            4
          </button>
          <button id="five" className="num" onClick={handlePress}>
            5
          </button>
          <button id="six" className="num" onClick={handlePress}>
            6
          </button>
          <button id="seven" className="num" onClick={handlePress}>
            7
          </button>
          <button id="eight" className="num" onClick={handlePress}>
            8
          </button>
          <button id="nine" className="num" onClick={handlePress}>
            9
          </button>
          <button id="zero" className="num" onClick={handlePress}>
            0
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
