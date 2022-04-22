import React from 'react'
import Logo from './Logo.js'
import LinkButton from '../common/LinkButton.js'


export default function Start() {
  let buttonText = "Quiz Setup".split(" ")
  const buttonArray = buttonText.map((text, textIndex, textArray) => {
    return (
      <LinkButton linkText={text.toLowerCase()} buttonText={text} key={textIndex}/>
    )
  })
  return (
    <div>
      <Logo />
      {buttonArray}
    </div>
  )
}
