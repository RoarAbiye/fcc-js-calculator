import './App.css';
import React from 'react';
import ReactFCCtest from 'react-fcctest';
import { evaluate, isNaN, std } from 'mathjs';


const ACTION = {
    ADD_DIGIT : "add-digit",
    DELETE : "delete",
    CLEAR : "clear",
    CHOOSE_OPERATION : "choose-operation",
    EVALUATE : "evaluate"
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentOperand: "0", 
                      prevOpperand: "0",
                      overwrite: false,
        }
        this.dispatch = this.dispatch.bind(this);
    }

    dispatch = action => {
    switch(action.type) {
        case ACTION.ADD_DIGIT:
            if(this.state.overwrite) {
                this.setState({
                        currentOperand: action.payload, 
                        overwrite: false,
                    })
                }
                else if (action.payload === "0" && this.state.currentOperand === "0"){
                    return this.state
                }
                else if (action.payload === "." && this.state.currentOperand.includes(".")){
                    return this.state
                }
                else if (this.state.currentOperand === "0"){
                    this.setState({currentOperand: action.payload})
                }
                else {
                this.setState({
                            currentOperand: this.state.currentOperand + action.payload,
                                
                    })
                }
            break;
        case ACTION.DELETE:
            if (this.state.currentOperand === "0") return this.state
            this.setState({currentOperand: this.state.currentOperand.slice(0,-1)});
            break;
        case ACTION.CLEAR:
            this.setState({ currentOperand: "0", prevOpperand: "0", operator: null})
            break;
        case ACTION.CHOOSE_OPERATION:
            if (this.state.prevOpperand === 0 && this.state.currentOperand === '0') {
                    return this.state;
                }
            if(/\D*\-$/.test(this.state.prevOpperand)) {
                       this.setState({prevOpperand: this.state.prevOpperand.slice(0,-2) + action.payload}) 
                }
            if (this.state.prevOpperand.match(/\D{2,2}/))  {
                    this.setState({prevOpperand: this.state.prevOpperand.replace(/\D*$/, action.payload)})
                    return
                }
            if(this.state.prevOpperand === "0") {
               this.setState({
                     prevOpperand: this.state.currentOperand + action.payload,
                     currentOperand: "0"})
                } else { 
                    if(this.state.currentOperand === '0'){ 
                        if(action.payload === '-') {
                            this.setState({prevOpperand: this.state.prevOpperand + action.payload})
                        }

                        return this.state;

                    }
                    this.setState({
                        prevOpperand: this.state.prevOpperand   +
                                      this.state.currentOperand +
                                      action.payload,
                        currentOperand: "0"
                                      
                    })
                  }
            break;
        case ACTION.EVALUATE:
            this.setState({
                    currentOperand: this.evaluate(this.state.prevOpperand + 
                                                  this.state.currentOperand
                                                 ),
                    prevOpperand: '0',
                    operator: "",
                    overwrite: true
                         })
        default: return
        }
    }
    
    evaluate = (str) => {
           return (Function ("return " + str)()) 
    }

render() {
    return (
        <div>
        <ReactFCCtest />
        <div>
            <div className='header'>
                <h1>JAVASCRIPT CALCULATOR</h1>
            </div>
            <div className="display">
                <div className="prev-operand"> {this.state.prevOpperand} </div>
                <div className="current-operand" id="display">{this.state.currentOperand}</div>
            </div>

            <div className="calculator">
            <button id="clear" onClick={()=>{this.dispatch({type: ACTION.CLEAR})}}
            >AC</button>

            <button id="delet" onClick={()=> {this.dispatch({type: ACTION.DELETE})}} >C</button>

            <button id = "one"    onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '1'})}}>1</button>
            <button id = "two"    onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '2'})}}>2</button>
            <button id = "three"  onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '3'})}}>3</button>
            <button id = "four"   onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '4'})}}>4</button>
            <button id = "five"   onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '5'})}}>5</button>
            <button id = "six"    onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '6'})}}>6</button>
            <button id = "seven"  onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '7'})}}>7</button>
            <button id = "eight"  onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '8'})}}>8</button>
            <button id = "nine"   onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '9'})}}>9</button>
            <button id = "zero"   onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '0'})}}>0</button>
            <button id = "decimal"onClick={() => {this.dispatch({type: ACTION.ADD_DIGIT, payload: '.'})}}>.</button>

            <button id="equals"      onClick={() => {this.dispatch({type: ACTION.EVALUATE})}} >=</button>
            <button id="add"         onClick={() => {this.dispatch({type: ACTION.CHOOSE_OPERATION, payload: "+"})}}       >+</button>
            <button id="subtract"    onClick={() => {this.dispatch({type: ACTION.CHOOSE_OPERATION, payload: "-"})}}  >-</button>
            <button id="multiply"    onClick={() => {this.dispatch({type: ACTION.CHOOSE_OPERATION, payload: "*"})}}  >*</button>
            <button id="divide"      onClick={() => {this.dispatch({type: ACTION.CHOOSE_OPERATION, payload: "/"})}}    >÷</button>
        </div>
        </div>
        </div>
    );
    }
}

export default App;
