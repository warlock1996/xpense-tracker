import React from 'react'

function Transaction () {
    return (
        <div className="transaction-container">
            <input className="transaction-name" type="text" placeholder="Title"/>
            <input className="transaction-amount" type="number" placeholder="Amount"/>
            <input className="transaction-add" type="button" value="commit"/>
        </div>
    );
}

export default Transaction;