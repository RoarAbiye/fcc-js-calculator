import './App.css';
import React from 'react';
import ReactFCCtest from 'react-fcctest';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentOperand: "", 
                      prevOpperand: "",
                      opperation: false
        }
        
        this.dispatch = this.dispatch.bind(this);
    }

    clickHandler = (action) => {
        this.dispatch(action)
    };
    
    dispatch = action => {
        //shorthand for state variables
    const C_OP = this.state.currentOperand;
    switch(action.type) {
        case "ADD_DIGIT":
                    this.setState({currentOperand: C_OP + action.payload})
                
            break;
        case "DELET":
            this.setState({currentOperand: C_OP.slice(0,-1)});
            break;
        case "CALCULATE":
            this.calculator(action.payload)
            break;
        default:
            return
    }}
    
    calculator = (operator) => {
        switch(operator) {
            case 'ADD':
                this.setState({ prevOpperand: this.state.currentOperand, 
                                currentOperand: "", 
                                opperation: "ADD"
                              }) 
                break
            case 'SUBTRACT':
                this.setState({ prevOpperand: this.state.currentOperand, 
                                currentOperand: "", 
                                opperation: 'SUBTRACT'
                              }) 
                break
            case 'DIVIDE':
                this.setState({ prevOpperand: this.state.currentOperand, 
                                currentOperand: "", 
                                opperation: "DIVIDE"
                              }) 
                break
            case 'MULTIPLY':
                this.setState({ prevOpperand: this.state.currentOperand, 
                                currentOperand: "", 
                                opperation: "MULTIPLY"
                              }) 
                break
            default:
                return
        }
    }
    
    evaluate = () => {
        const float_C_OP = parseFloat(this.state.currentOperand)
        const float_P_OP = parseFloat(this.state.prevOpperand)
        const opperation = this.state.opperation;
        let result;

        switch(opperation){
           case 'ADD':
               result = float_C_OP + float_P_OP;
               this.setState({currentOperand: result})
               break
           case 'SUBTRACT':
               result = float_C_OP - float_P_OP;
               this.setState({currentOperand: result})
               break
           case 'MULTIPLY':
               result = float_C_OP * float_P_OP;
               this.setState({currentOperand: result})
               break
           case 'DIVIDE':
               result = float_C_OP / float_P_OP;
               this.setState({currentOperand: result})
               break
           default:
               return
        }

    }
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

            <button id="delet" onClick={()=> {this.dispatch({type: "DELET", payload: ""})}} >C</button>

            <button id = "one"    onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '1'})}}>1</button>
            <button id = "two"    onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '2'})}}>2</button>
            <button id = "three"  onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '3'})}}>3</button>
            <button id = "four"   onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '4'})}}>4</button>
            <button id = "five"   onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '5'})}}>5</button>
            <button id = "six"    onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '6'})}}>6</button>
            <button id = "seven"  onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '7'})}}>7</button>
            <button id = "eight"  onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '8'})}}>8</button>
            <button id = "nine"   onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '9'})}}>9</button>
            <button id = "zero"   onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '0'})}}>0</button>
            <button id = "decimal"onClick={() => {this.dispatch({type: "ADD_DIGIT", payload: '.'})}}>.</button>

            <button id="equals"      onClick={this.evaluate} >=</button>
            <button id="add"         onClick={() => {this.dispatch({type: "CALCULATE", payload: "ADD"})}}       >+</button>
            <button id="subtract"    onClick={() => {this.dispatch({type: "CALCULATE", payload: "SUBTRACT"})}}  >-</button>
            <button id="multiply"    onClick={() => {this.dispatch({type: "CALCULATE", payload: "MULTIPLY"})}}  >*</button>
            <button id="divide"      onClick={() => {this.dispatch({type: "CALCULATE", payload: "DIVIDE"})}}    >/</button>
        </div>
        </div>
    );
    }
}

export default App;
