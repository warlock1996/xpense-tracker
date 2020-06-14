import React from 'react';

function History (props) {
    return (
        <div className="history-container">
            <p className="history-label"> History </p>  
            <ul className="transactions-list">
               { props.transactions.map((item, index) => (
                       <ul key= { index } className={ item.amount[0] === '-' ? 'transaction-expense' : 'transaction-income'  }> 
                            <span className="item-name"> {item.name} </span> 
                            <span className="item-amount"> {item.amount}  </span>
                            <span className="item-clear" onClick = { (e) => props.clear(index, e) }> &times; </span>
                       </ul>
                    ))
                }
            </ul>
        </div>
    );
}

export default History;