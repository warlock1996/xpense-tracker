import React from 'react';
import './App.css';
import Balance from './components/Balance'
import Cashbox from './components/Cashbox'
import History from './components/History'
import Transaction from './components/Transaction'

class App extends React.Component {
  state = {
      balance: 23
  }
 render () {
    return (
      <div className="App">
          <h2 className="header">Expense Tracker</h2>
          <Balance balance={ this.state.balance }/>
          <Cashbox/>
          <History/>
          <Transaction/>
      </div>
    ); 
  }
}

export default App;
