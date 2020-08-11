import React from 'react';
import './App.css';
import { GlobalProvider } from "./components/sharedstate.js"
import Balance from './components/Balance'
import Cashbox from './components/Cashbox'
import History from './components/History'
import Transaction from './components/Transaction'


function App ()  {
    return (
      <div className="App">
          <h2 className="header">Expense Tracker</h2>
          <GlobalProvider>
            <Balance/>
            <Cashbox/>
            <History/>
            <Transaction/>
          </GlobalProvider>
            <h5 className="footer">made with <span>&#10084;</span> <a href="https://github.com/warlock1996" target="_blank"> by arslan ali </a> </h5>
      </div>
    ); 
  }

  export default App;