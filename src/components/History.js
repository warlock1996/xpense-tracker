import React from 'react';
import { GlobalContext } from "./sharedstate"

function History () {
    const { transactions, dispatcher } = React.useContext(GlobalContext)
    function updateName (e, item) {
        dispatcher({type: 'update-name', payload: e.target.innerText.trim(), _item: item})
    }
    function updateAmount (e, item) {
        dispatcher({type: 'update-amount', payload: parseInt(e.target.innerText.trim()), item: item})
    }
    return (
        <div className="history-container">
            <p className="history-label"> History </p>
            <ul className="transactions-list">
               { transactions.length ? transactions.map((item, index) => (
                       <li key= { item.id } className={ Math.sign(item.amount) !== -1 ? 'transaction-income' : 'transaction-expense'}> 
                            <span className="item-name" onInput= { (e) => updateName(e, item) }>{item.name} </span> 
                            <span className="item-amount" onInput= { (e) => updateAmount(e, item) }>{item.amount} </span>
                            <span className="item-clear" onClick = { () => dispatcher({type: 'remove-transaction', payload: item.id})  }> &times; </span>
                       </li>
                    ))
                : <span className="no-transactions"> You Don't Have Any Transactions Yet ! </span>}
            </ul>
        </div>
    );
}

export default History;