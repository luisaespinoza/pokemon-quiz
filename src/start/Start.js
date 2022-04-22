import React from 'react'
import Logo from './Logo.js'
import Button from '../common/Button.js'
import { Link } from "react-router-dom"


export default function Start() {
  let buttonText = "Start"
  return (
    <div>
      <Logo />
      <Link to="/quiz">
        <Button text={buttonText}/>
      </Link>
    </div>
  )
}
