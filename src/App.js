import React, { useContext } from 'react';
import './App.css';
import { GlobalContext } from "./components/sharedstate.js"
import Balance from './components/Balance'
import Cashbox from './components/Cashbox'
import History from './components/History'
import Transaction from './components/Transaction'
import Switch from './components/Switch'


function App ()  {
  let { theme } = useContext(GlobalContext);
  const classes = 'app ' + theme;
  return (
        <div className={classes}>
          <div className="wrapper">
            <h2 className="header">Expense Tracker</h2>
              <Balance/>
              <Cashbox/>
              <History/>
              <Transaction/>
            <Switch />
              <h5 className="footer">made with <span>&#10084;</span> <a href="https://github.com/warlock1996" rel="noopener noreferrer"  target="_blank"> by arslan ali </a> </h5>
          </div>
        </div>
    ); 
  }

  export default App;