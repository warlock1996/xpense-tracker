import React, { useReducer } from "react";
import Reducer from "./reducer"

// some inital state for the context
const initalState = {
    transactions: [
        {id: 0, name: 'some transaction', amount: 1000},
        {id: 1, name: 'some transaction', amount: 2000},
        {id: 2, name: 'some expense', amount: -3000}
    ]
}

// creating global context 
export const GlobalContext = React.createContext(initalState)

// creating a wrapping global provider
export const GlobalProvider = (props) => {

    // creating a reducer
    const [state, dispatch] = useReducer(Reducer, initalState)
    
    return (
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions,
                dispatcher: dispatch
            }
         }>
                { props.children }
        </GlobalContext.Provider>
    )
}