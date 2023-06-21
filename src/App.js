import { useEffect, useReducer } from "react";
import "./App.css";

// Utility function to validate and append numbers
function numberValidator(numToAppend, currNumber) {
  if ((currNumber === "" || currNumber === "0") && numToAppend === "0") {
    return "0";
  } else if ((currNumber === "" || currNumber === "0") && numToAppend === ".") {
    return "0.";
  } else if (currNumber.includes(".") && numToAppend === ".") {
    return currNumber;
  } else if (currNumber === "0" && numToAppend !== "0" && numToAppend !== ".") {
    return numToAppend;
  } else {
    return currNumber + numToAppend;
  }
}

// Reducer function to handle state updates
function computationReducer(state, action) {
  console.log(state)
  switch (action.type) {
    case "append":
      if (state.operator === "") {
        return {
          ...state,
          term1: numberValidator(action.num, state.term1),
          display: numberValidator(action.num, state.term1),
        };
      } else {
        return {
          ...state,
          term2: numberValidator(action.num, state.term2),
          display: state.display + action.num,
        };
      }
    case "delete":
      return {
        term1: "",
        term2: "",
        operator: "",
        display: "0",
        result: "",
      };
    case "operator":
      if (state.operator !== "" && action.sign === "-") {
        if (state.term2 === "") {
          return {
            ...state,
            term2: action.sign,
            display: state.display + action.sign,
          };
        } else {
          const evaluatedDisplay = eval(state.display.includes('--')  ? state.display.replace("--", "+") : state.display).toString();
          return {
            ...state,
            term1: state.term2.includes("--")
              ? state.term2.replace("--", "-") && "-" + evaluatedDisplay
              : evaluatedDisplay,
            term2: "",
            operator: action.sign,
            display:
              state.term2.includes("--") || state.term1 === evaluatedDisplay
                ? state.term2.replace("--", "-") && "-" + evaluatedDisplay
                : evaluatedDisplay + action.sign,
          };
        }
      } else if (
        state.operator !== "" &&
        action.sign !== "="
      ) {
        if(state.term2 === '-'){
          console.log('override minus')
            return{
              ...state,
              term2: '',
              operator: action.sign,
              display: state.term1 + action.sign
            }
        }else if(state.term2 === ''){
          return{
            ...state,
            operator: action.sign,
            display: state.term1 + action.sign
          }
        }
        else{
          const evaluatedDisplay = eval(
            state.display.includes("--")
              ? state.display.replace("--", "+")
              : state.display
          ).toString();
          console.log(state.operator);
          return {
            ...state,
            term1: state.term2.includes("--")
              ? state.term2.replace("--", "-") && "-" + evaluatedDisplay
              : evaluatedDisplay,
            term2: "",
            operator: action.sign,
            display:
              state.term2.includes("--") || state.term1 === evaluatedDisplay
                ? state.term2.replace("--", "-") && "-" + evaluatedDisplay
                : evaluatedDisplay + action.sign,
          };
        }
      }

       else if (
        state.operator !== "" &&
        state.term2 !== "" &&
        action.sign === "="
      ) {
        const evaluatedDisplay = eval(state.display.includes('--')  ? state.display.replace("--", "+") : state.display).toString();
        return {
          ...state,
          term1: state.term2.includes("--")
            ? state.term2.replace("--", "-") && "-" + evaluatedDisplay
            : evaluatedDisplay,
          term2: "",
          operator: "",
          display:
            state.term2.includes("--") || state.term1 === evaluatedDisplay
              ? state.term2.replace("--", "-") && "-" + evaluatedDisplay
              : evaluatedDisplay,
        };
      } else {
        return {
          ...state,
          operator: action.sign,
          display: state.term1 + action.sign,
        };
      }

    default:
      return state;
  }
}

function App() {
  const initialState = {
    term1: "",
    term2: "",
    operator: "",
    display: "0",
    result: "",
  };

  const [state, dispatch] = useReducer(computationReducer, initialState);

  useEffect(() => {
    // Update the display when state changes
    document.getElementById("display").innerText = state.display;
  }, [state]);

  const handleNumPress = (e) => {
    e.preventDefault();
    const text = e.target.innerHTML.toString();

    dispatch({
      type: "append",
      num: text,
    });
  };

  const handleSignPress = (e) => {
    e.preventDefault();
    const text = e.target.innerHTML.toString();

    dispatch({
      type: "operator",
      sign: text,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({
      type: "delete",
    });
  };

  return (
    <div className="App">
      <div className="calc">
        <div id="display">{state.display}</div>
        <form className="buttons-container">
          {/* Buttons for calculator */}
          <button id="clear" className="clear" onClick={handleDelete}>
            clear
          </button>
          <button id="divide" className="operator" onClick={handleSignPress}>
            /
          </button>
          <button id="multiply" className="operator" onClick={handleSignPress}>
            *
          </button>
          <button id="subtract" className="operator" onClick={handleSignPress}>
            -
          </button>
          <button id="add" className="operator" onClick={handleSignPress}>
            +
          </button>
          <button id="equals" className="operator" onClick={handleSignPress}>
            =
          </button>
          <button id="decimal" className="num" onClick={handleNumPress}>
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
