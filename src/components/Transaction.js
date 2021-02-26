import React, { useState, useContext } from 'react'
import { GlobalContext } from "./sharedstate"

function Transaction (props) {

    const { dispatcher }  = useContext(GlobalContext)

    const [state, setTr] = useState({
        id: '',
        name: '',
        amount: 0,
    })
    function saveTr() {
        const trans = {...state, id: Math.floor(Math.random()*1000), amount: parseInt(state.amount)}
        dispatcher({type: 'add', payload: trans })
        setTr({name: '', amount: 0})        
    }
    return (
        <div className="transaction-container">
            <input 
                title="Enter Transaction Name" 
                className="transaction-name" 
                onChange = {(e) => setTr({...state, name: e.target.value}) }
                value = { state.name }
                type="text"
                placeholder="Title"
            />
            <input 
                title="Enter Transaction Amount" 
                className="transaction-amount" 
                onChange = {(e) => setTr({...state, amount: e.target.value}) }
                value = {state.amount} 
                disabled={ !state.name.length } 
                type="number" 
                placeholder="Amount"
            />

            <input 
                disabled={ !state.name.length || !state.amount.length }
                className={  state.amount[0] === '-' ? 'add-expense' : 'add-income' }
                type="button"
                onClick = { saveTr }
                value={ state.amount[0] === '-' ? 'add xpense' : 'add income' }
            />
        </div>
    );
}

export default Transaction;