// import { useReducer } from "react";
import { useState } from "react";
import "./App.css";

//create reducer for diff types: append, calc, del,
const initState = { operand: "", nextOperand: "", operator: "", result: ""};


//refactor to use redux after you actually learn redux
// const ACTIONS = {
//   SET_OPERAND_OPERATOR: "set-operand-operator",
//   SET_NEXTOPERAND_CALC: "set-nextoperand-calc",
//   CLEAR: 'clear'
// };

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case ACTIONS.SET_OPERAND_OPERATOR:
//       return { ...state, nextOperand: state.nextOperand + payload };
//     case ACTIONS.SET_NEXTOPERAND_CALC:
//       break;
//     case ACTIONS.CLEAR:
//       break;
//     default:
//       console.log(type, payload);
//   }
// }
// IMPLEMENT 'CLEAR'

function App() {


  // checks calc state and processes neccessary oprs
  // const [calcState, dispatch] = useReducer(reducer, initState);


  //constrols display
  const [display, setDisplay] = useState('0');

  const handleClick = (e) => {
    // prevents refresh on button press
    e.preventDefault();
    let text = e.target.innerHTML.toString();
    let textClass = e.target.className;

    if (text === "clear") {
      setDisplay('0');
    } else {
      numberValidator(text, textClass);
    }
  };


  // -a sign or clear terminates funtion call/validation

  // all console logs are tests.
  // this functions makes sure the integer inputted can be operated , i.e is calculable.
  const numberValidator = (text, kind) => {
    // text and kind, number validator recieves inputed text and its class
    console.log('display is a  ',typeof display, 'text is a  ',typeof text)
    console.log(display, ' vs ',  text)

    // decimal point validator, to make sure not more than one decimal per integer
    if(text === '.' && display.includes('.') === false){
      setDisplay(display + text)
      console.log('check 4')
    }

    // removes trailing zeros at the beginning of int and replaces it with inputed num
    else if('0' === display){
      if(text === '0'){
        setDisplay(text)
        console.log('check 1')
      }else if(text !== '0' && kind === 'num'){
        setDisplay(text)
        console.log('check 2')
      }

    // appends inputted num
    }else if(display !== '0'){
      if(kind === 'num'){
        setDisplay(display + text)
        console.log('check 3')
      }
    }
    else{

    }
  };
  console.log(display);
  console.log(display.toString().includes("."));
  return (
    <div className="App">
      <div className="calc">
        {/* display state */}
        <div id="display">{display}</div>
        <form className="buttons-container">
          {/* each button controlled by a handclick function and it's classname/id */}
          <button id="clear" className="clear" onClick={handleClick}>
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
          <button id="decimal" className="decimal num" onClick={handleClick}>
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
