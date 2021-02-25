import React, { useReducer } from "react";
import Reducer from "./reducer"

// some inital state for the context
const initalState = {
    transactions: [],
    theme: 'light'
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
                theme: state.theme,
                dispatcher: dispatch
            }
         }>
                { props.children }
        </GlobalContext.Provider>
    )
}