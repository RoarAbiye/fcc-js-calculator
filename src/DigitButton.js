import { ACTIONS } from "./App";
import React from "react";


export default function DigitButton({ dispatch, digit }){
let buttonId;
    switch(digit){
        case "1":
           buttonId="one"
            break
        case "2":
            buttonId="two"
            break
        case "3":
            buttonId="three"
            break
        case "4":
            buttonId="four"
            break
        case "5":
            buttonId="five"
            break
        case "6":
            buttonId="six"
            break
        case "7":
            buttonId="seven"
            break
        case "8":
            buttonId="eight"
            break
        case "9":
            buttonId="nine"
            break
        case "0":
            buttonId="zero"
            break
        case ".":
            buttonId="decimal"
            break
        default:
            return
    }
    return (
        <button
            id = {buttonId}
            onClick={() => dispatch ({type: ACTIONS.ADD_DIGIT, payload: (digit)})
            }
        >
            {digit}
        </button>

    )
}