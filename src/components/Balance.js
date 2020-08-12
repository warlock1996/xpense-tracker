import React, { useContext }  from 'react';
import { GlobalContext } from "./sharedstate"

function Balance () {
    const { transactions } = useContext(GlobalContext);
    const balance = transactions.reduce((acc, tr) => acc + tr.amount, 0)
    return (
        <div className="balance-container">
            <p className="balance-label">Your Balance</p>
            <p  className={ (Math.sign(balance) !== -1) ? 'positive-balance' : 'negative-balance' } > { balance.toFixed(2) }
               { (Math.sign(balance) !== -1) ? <span className = "upward-arrow"> &uarr; </span> : <span className = "downward-arrow" > &darr; </span>  }
            </p>
        </div>
    )
}

export default Balance; 