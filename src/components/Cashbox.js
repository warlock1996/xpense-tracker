import React, { useContext }  from 'react';
import { GlobalContext } from "./sharedstate" 

function Cashbox (props) {
    const { transactions } = useContext(GlobalContext);
    const income = transactions.filter(tr => Math.sign(tr.amount) !== -1).reduce((acc, tr) =>   tr.amount + acc , 0)
    const xpense = transactions.filter(tr => Math.sign(tr.amount) === -1).reduce((acc, tr) => tr.amount + acc, 0)
    return (
        <div className="cashbox">
            <span className="box1">
                <p className="income-label">INCOME</p>
                <p className="income-value">$ { income }.00</p>
            </span>
            <span className="box2">
                <p className="expense-label">Expense</p>
                <p className="expense-value">$ { xpense }.00</p>
            </span>
        </div>
    )
}

export default Cashbox;