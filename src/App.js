// import { useReducer } from "react";
import { useState } from "react";
import "./App.css";

//create reducer for diff types: append, calc, del,

//refactor to use redux after you actually learn redux
// const ACTIONS = {
//   SET_OPERAND_OPERATOR: "set-operand-operator",
//   SET_term2_CALC: "set-term2-calc",
//   CLEAR: 'clear'
// };

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case ACTIONS.SET_OPERAND_OPERATOR:
//       return { ...state, term2: state.term2 + payload };
//     case ACTIONS.SET_term2_CALC:
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
  const [display, setDisplay] = useState("0");
  const [term1, setTerm1] = useState("0");
  const [operator, setOperator] = useState();
  const [term2, setTerm2] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    // prevents refresh on button press
    e.preventDefault();
    let text = e.target.innerHTML.toString();
    let textClass = e.target.className;
    let textId = e.target.id;

    if (text === "clear") {
      setTerm2();
      setTerm1('0');
      setOperator();
      setDisplay("0");
    } else if (textClass === "num") {
      numberValidator(text, textId);
    } else if (textClass === "operator") {
      solver(text, textId);
    }
  };

  const solver = (text, id) => {
    // console.log(text, id);
    setTerm1(display)
    if(term2 === ''){
      setOperator(text)
      setDisplay(display + text)
      // console.log(term1, operator, term2) BUG: state does not update to reflect new term1
    }

  };

  
  // this functions makes sure the integer inputted can be operated , i.e is calculable.
  const numberValidator = (text, id) => {
    // text and kind, number validator recieves inputed text and its class
    // console.log('display is a  ',typeof display, 'text is a  ',typeof text)
    // console.log(display, ' vs ',  text)
    // decimal point validator, to make sure not more than one decimal per integer
    if (text === "." && display.includes(".") === false) {
      setDisplay(display + text);
    }

    // removes trailing zeros at the beginning of int and replaces it with inputed num
    else if ("0" === display) {
      if (text === "0") {
        setDisplay(text);
      } else if (text !== "0" && id !== "decimal") {
        setDisplay(text);
      }

      // appends inputted num
    } else if (display !== "0") {
      if (id !== "decimal") {
        setDisplay(display + text);
      }
    } else {
    }
  };

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
          <button id="subtract" className="operator" onClick={handleClick}>
            -
          </button>
          <button id="add" className="operator" onClick={handleClick}>
            +
          </button>
          <button id="equals" className="operator" onClick={handleClick}>
            =
          </button>
          <button id="decimal" className="num" onClick={handleClick}>
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
