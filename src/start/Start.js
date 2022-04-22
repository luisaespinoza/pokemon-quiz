import React from 'react'
import Logo from './Logo.js'
import Button from '../common/Button.js'


export default function Start() {
  let buttonText = "Start"
  return (
    <div>
      <Logo />
        <Button text={buttonText} />
    </div>
  )
}
