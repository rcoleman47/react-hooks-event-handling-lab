import React from 'react'

function EyesOnMe() {
  const focus = () => console.log('Good!');
  const blurr = () => console.log('Hey! Eyes on me!')
  return (
    <button onFocus={focus} onBlur={blurr} >Eyes on me</button>
  )
}

export default EyesOnMe