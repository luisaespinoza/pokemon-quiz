import React from 'react'
import pokeLogo from '../pokemon-logo.png'

export default function logo() {
  return (
    <div>
      <header className="App-header">
        <img src={pokeLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}
