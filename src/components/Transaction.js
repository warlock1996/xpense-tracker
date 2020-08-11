import React from 'react'

function Transaction (props) {
    return (
        <div className="transaction-container">
            {/* <input className="transaction-name" onChange =  { props.setName }  value= { props.name } type="text" placeholder="Title"/>
            <input title="Enter Transaction Name" disabled={ !props.name.length } className="transaction-amount" onChange =  { props.setAmount } value = { props.amount} type="number" placeholder="Amount"/>
            <input disabled={ !props.name.length || !props.amount.length } className={  props.amount[0] === '-' ? 'add-expense' : 'add-income' } type="button" value={ props.amount[0] === '-' ? 'add xpense' : 'add income'  } onClick = { props.save }/> */}
        </div>
    );
}

export default Transaction;