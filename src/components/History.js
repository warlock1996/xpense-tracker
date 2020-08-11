import React from 'react';
import { GlobalContext } from "./sharedstate"

function History (props) {
    const { transactions, dispatcher } = React.useContext(GlobalContext)
    return (
        <div className="history-container">
            <p className="history-label"> History </p>  
            <ul className="transactions-list">
               { transactions.length ? transactions.map((item, index) => (
                       <li key= { index } className={ item.amount[0] === '-' ? 'transaction-expense' : 'transaction-income'  }> 
                            <span className="item-name"> {item.name} </span> 
                            <span className="item-amount"> ${item.amount}.00  </span>
                            <span className="item-clear" onClick = { () => dispatcher({type: 'remove-transaction', id: item.id})  }> &times; </span>
                       </li>
                    ))
                : <span className="no-transactions"> You Don't Have Any Transactions Yet ! </span>}
            </ul>
        </div>
    );
}

export default History;