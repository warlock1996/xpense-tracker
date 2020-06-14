import React  from 'react';

function Cashbox (props) {
    return (
        <div className="cashbox">
            <span className="box1">
                <p className="income-label">INCOME</p>
                <p className="income-value">$ { props.income }.00</p>
            </span>
            <span className="box2">
                <p className="expense-label">Expense</p>
                <p className="expense-value">$ { props.expense }.00</p>
            </span>
        </div>
    )
}

export default Cashbox;