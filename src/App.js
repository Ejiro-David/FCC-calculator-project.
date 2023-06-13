import { useReducer } from "react";
// import { useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    term1: "",
    term2: "",
    operator: "",
    display: "0",
    result: "",
  };
  const [allState, dispatch] = useReducer(computationReducer, initialState);

  function computationReducer(allState, action) {
    if (action.type === "append") {
      // console.log("num is pressed", allState);

      function numberValidator(numToAppend, currNumber) {
        if ((currNumber === "" || currNumber === "0") && numToAppend === "0") {
          return "0";
        } else if (
          (currNumber === "" || currNumber === "0") &&
          numToAppend === "."
        ) {
          return "0.";
        } else if (currNumber.includes(".") && numToAppend === ".") {
          return currNumber;
        } else if (
          currNumber === "0" &&
          numToAppend !== "0" &&
          numToAppend !== "."
        ) {
          return numToAppend;
        } else {
          return currNumber + numToAppend;
        }
      }
      return {
        ...allState,
        term1: numberValidator(action.num,  allState.term1),
        display: numberValidator(action.num, allState.term1),
      };
    } else if (action.type === "delete") {
      console.log("clear");
      return {
        term1: "",
        term2: "",
        operator: "",
        display: "0",
        result: "",
      };
    }else if(action.type === "operator"){
      if(allState.term1 === ''){
        if(action.sign === '='){
          return{
            ...allState,
            display: '0'
          }
        }
        return {
          ...allState,
          term1: '0',
          operator: action.sign,
          display: '0' + action.sign
        }
      }else if(allState.term1 !== '' && allState.operator === ''){
        return {
          ...allState,
          operator: action.sign,
          display: allState.display + action.sign
        }
      }else if(allState.operator !== ''){

      }
    }
  }
  const handleNumPress = (e) => {
    e.preventDefault();
    let text = e.target.innerHTML.toString();
    dispatch({
      type: "append",
      num: text,
    });
  };

  const handleSignPress = (e) => {
    e.preventDefault();
    let text = e.target.innerHTML.toString();

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
        {/* display state */}
        <div id="display">{allState.display}</div>
        <form className="buttons-container">
          {/* each button controlled by a handclick function and it's classname/id */}
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
