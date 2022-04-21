import React from 'react'
import Logo from './Logo.js'
import Button from '../common/Button.js'

export default function Start() {
  let buttonText = "Start"
  const handleClick = () => {
    
  }
  return (
    <div>
      <Logo/>
      <Button onClick={handleClick} text={buttonText}></Button>
    </div>
  )
}
