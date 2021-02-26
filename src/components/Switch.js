import React, { useContext } from 'react' 
import { GlobalContext } from "./sharedstate"

function Switch() {
  const { dispatcher, theme } = useContext(GlobalContext)
  

  function toggleTheme(options) {
    dispatcher(options)
  }
  const _light = theme === 'light' ? 'light active' : 'light'; 
  const _dark = theme === 'dark' ? 'dark active' : 'dark'; 
  
  return (
      <div className="switch">
        <div className={_light} onClick={() => toggleTheme({ type: 'switch-theme', payload:'light'})}>&#9728;</div>
        <div className={_dark} onClick={() => toggleTheme({ type: 'switch-theme', payload:'dark'})}>&#x263E;</div>
      </div>
    )
}

export default Switch;