import React from 'react';
import './App.css';
import Balance from './components/Balance'
import Cashbox from './components/Cashbox'
import History from './components/History'
import Transaction from './components/Transaction'

class App extends React.Component {
  state = {
      balance: '0',
      income: '0',
      expense: '0',
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
        let expense = (parseInt(this.state.expense) + parseInt(this.state.tamount))
        let balance = (parseInt(this.state.balance) + parseInt(this.state.tamount)) 
        this.setState({
          expense: (expense),
          balance: balance 
        })
    } else {
      let income = (parseInt(this.state.income) + parseInt(this.state.tamount))
      let balance = (parseInt(this.state.balance) + parseInt(this.state.tamount))
      this.setState({
        income: income,
        balance: balance
      })
    }
    this.setState({
        transactions: incoming,
        tname: '',
        tamount: 0,
    })
  }
  clearT = (index, event) => {
      console.log(event);
  }
 render () {
    return (
      <div className="App">
          <h2 className="header">Expense Tracker</h2>
          <Balance balance={ this.state.balance }/>
          <Cashbox income= { this.state.income } expense = { this.state.expense }/>
          <History transactions = { this.state.transactions } clear = { () => this.clearT()  }/>
          <Transaction save = { this.saveTransaction } setName = { this.setName } setAmount = { this.setAmount } name = { this.state.tname } amount = { this.state.tamount} />
      </div>
    ); 
  }
}

export default App;
