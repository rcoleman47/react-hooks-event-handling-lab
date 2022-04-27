import React from 'react'

function Keypad() {
  const logChange =(e)=> console.log(`Entering password...`)

  return (
    <input onChange={logChange} type='password' />
  )
}

export default Keypad
