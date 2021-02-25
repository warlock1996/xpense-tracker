import React, { useContext } from 'react' 
import { GlobalContext } from "./sharedstate"

function Switch() {
  const { dispatcher } = useContext(GlobalContext)
  
  function toggleTheme(options) {
    dispatcher(options)
  }
  
  return (
      <div className="switch">
        <div className="light" onClick={() => toggleTheme({ type: 'switch-theme', payload:'light'})}>&#9728;</div>
        <div className="dark" onClick={() => toggleTheme({ type: 'switch-theme', payload:'dark'})}>&#x263E;</div>
      </div>
    )
}

export default Switch;