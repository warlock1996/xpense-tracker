import React from 'react';

function History (props) {
    return (
        <div className="history-container">
            <p className="history-label"> History </p>  
            <ul className="transactions-list">
               { props.transactions.length ? props.transactions.map((item, index) => (
                       <li key= { index } className={ item.amount[0] === '-' ? 'transaction-expense' : 'transaction-income'  }> 
                            <span className="item-name"> {item.name} </span> 
                            <span className="item-amount"> ${item.amount}.00  </span>
                            <span className="item-clear" onClick = { (e) => props.clear(index, e) }> &times; </span>
                       </li>
                    ))
                : <span className="no-transactions"> You Don't Have Any Transactions Yet ! </span>}
            </ul>
        </div>
    );
}

export default History;