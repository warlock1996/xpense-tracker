import React from 'react';

function History (props) {
    return (
        <div className="history-container">
            <p className="history-label"> History </p>  
            <ul className="transactions-list">
               { props.transactions.map((item, index) => (
                       <li key= { index } className={ item.amount[0] === '-' ? 'transaction-expense' : 'transaction-income'  }> 
                            <span className="item-name"> {item.name} </span> 
                            <span className="item-amount"> {item.amount}  </span> 
                       </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default History;