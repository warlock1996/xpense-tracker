import React from 'react';
import './App.css';
import Balance from './components/Balance'
import Cashbox from './components/Cashbox'
import History from './components/History'
import Transaction from './components/Transaction'

class App extends React.Component {
  state = {
      income: "",
      expense: "",
      tname: '',
      tamount: 0,
      transactions: [],
  }
  setName = (event) => {
    this.setState({
      tname: event.target.value
    })
  }
  setAmount = (event) => {
   this.setState({
     tamount: event.target.value
   })
  }
  saveTransaction = () => {
    let incoming  = this.state.transactions
    incoming.push({name: this.state.tname, amount: this.state.tamount})
    if (this.state.tamount[0] === '-') {
        this.setState({
          expense: (this.state.expense + this.state.tamount)
        })
    } else {
      this.setState({
        income: (this.state.income + this.state.tamount)
      })
    }
    this.setState({
        transactions: incoming,
        tname: '',
        tamount: 0,
    })
  }
 render () {
    return (
      <div className="App">
          <h2 className="header">Expense Tracker</h2>
          <Balance balance={ (this.state.income + this.state.expense) }/>
          <Cashbox income= { this.state.income } expense = { this.state.expense }/>
          <History transactions = { this.state.transactions }/>
          <Transaction save = { this.saveTransaction } setName = { this.setName } setAmount = { this.setAmount } name = { this.state.tname } amount = { this.state.tamount} />
      </div>
    ); 
  }
}

export default App;
