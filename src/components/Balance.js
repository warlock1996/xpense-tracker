import React  from 'react';

function Balance (props) {
    return (
        <div className="balance-container">
            <p className="balance-label">Your Balance</p>
            <p className="balance-value"> ${ props.balance }.00</p>
        </div>  
    )
}

export default Balance; 