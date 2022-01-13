import './App.css';
import React from 'react';
import ReactFCCtest from 'react-fcctest';

const buttonId  = {
            "1": "one",
            "2": "two",
            "3": "three",
            "4": "four",
            "5": "five",
            "6": "six",
            "7": "seven",
            "8": "eight",
            "9": "nine",
            "0": "zero",
            ".": "decimal",
        }


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentOperand: "", 
                      prevOpperand: "",
                      opperation: null
        }
        
        this.dispatch = this.dispatch.bind(this);
    }

    clickHandler = (action) => {
        this.dispatch(action)
    };
    
    /*    oppButtonHandler = (opp) => {
        this.setState({prevOpperand: this.state.currentOperand, currentOperand: "" })
    }
    */
    dispatch = action => {
        //shorthand for state variables
    const C_OP = this.state.currentOperand;
    const P_OP = this.state.prevOpperand;
    console.log(action)
    switch(action.type) {
        case "ADD_DIGIT":
            this.setState({currentOperand: C_OP + action.digit});
            break;
        case "DELET":
            this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        case "EVALUATE":
        //    this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        case "ADD":
         //   this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        case "SUBTRACT":
          //  this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        case "DIVIDE":
          //  this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        case "MULTIPLY":
          //  this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        default:
            return
    }}

render() {
    return (
        <div>
        <ReactFCCtest />
        <div className="calculator">
            <div   className="display">
                <div className="prev-operand">{this.state.prevOpperand}</div>
                <div className="current-operand" id="display" >{this.state.currentOperand}</div>
            </div>
            <button id="clear" onClick={()=>{this.setState({ currentOperand: "0",
                                                             prevOpperand: ""
                                                           })
                                            }
                                        }
            >AC</button>

            <button id="delet" onClick={()=> {this.dispatch({type: "DELET", digit: ""})}} >C</button>

            <button id = "one"    onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '1'})}}>1</button>
            <button id = "two"    onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '2'})}}>2</button>
            <button id = "three"  onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '3'})}}>3</button>
            <button id = "four"   onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '4'})}}>4</button>
            <button id = "five"   onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '5'})}}>5</button>
            <button id = "six"    onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '6'})}}>6</button>
            <button id = "seven"  onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '7'})}}>7</button>
            <button id = "eight"  onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '8'})}}>8</button>
            <button id = "nine"   onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '9'})}}>9</button>
            <button id = "zero"   onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '0'})}}>0</button>
            <button id = "decimal"onClick={() => {this.dispatch({type: "ADD_DIGIT", digit: '.'})}}>.</button>

            <button id="equals"   onClick={() => {this.oppButtonHandler("EVALUATE")}} >=</button>
            <button id="add"      onClick={() => {this.oppButtonHandler("ADD")}}  >+</button>
            <button id="subtract" onClick={() => {this.oppButtonHandler("SUBTRACT")}}  >-</button>
            <button id="divide"   onClick={() => {this.oppButtonHandler("DIVIDE")}}  >/</button>
            <button id="multiply" onClick={() => {this.oppButtonHandler("MULTIPLY")}}  >*</button>
        </div>
        </div>
    );
    }
}

export default App;
