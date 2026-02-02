import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Navigation/>
        
      </BrowserRouter>
    </div>
  )
}

export default App
